import { create } from 'apisauce';
import * as constant from '../constants/constants';

// Base URL
const api = create({
  baseURL: constant.BASE_URL
});

/**
 * Function get popular videos
 */
export const getPopularVideos = (videoAPI = api) => {
  const url = '/videos';

  return videoAPI.get(url, {
    chart: constant.CHART,
    regionCode: constant.REGION_CODE,
    part: constant.PART,
    videoCategoryId: 0,
    maxResults: constant.MAX_RESULT,
    key: constant.API_KEY
  });
};

/**
 * Function  get video by id
 * @param {string} videoId id of video
 */
export const getVideosById = (videoId, videoAPI = api) => {
  const url = '/videos';

  return videoAPI.get(url, {
    id: videoId,
    part: constant.PART,
    key: constant.API_KEY
  });
};

/**
 * Function get statistic of video by id
 * @param {string} videoId id of video
 */
export const getStatisticById = (videoId, videoAPI = api) => {
  const url = '/videos';

  return videoAPI.get(url, {
    id: videoId,
    part: constant.PART,
    maxResults: constant.MAX_RESULT,
    key: constant.API_KEY
  });
};

/**
 * Function search video by keyword
 * @param {string} keyword search keyword
 */
export const searchVideoByKeyword = (keyword, videoAPI = api) => {
  const url = '/search';

  return videoAPI.get(url, {
    part: 'snippet',
    maxResults: constant.MAX_RESULT,
    q: keyword,
    type: constant.TYPE,
    key: constant.API_KEY
  });
};

/**
 * Function search related Video
 * @param {string} videoId id of video
 */
export const searchRelatedVideo = (videoId, videoAPI = api) => {
  const url = '/search';

  return videoAPI.get(url, {
    part: 'snippet',
    maxResults: constant.MAX_RESULT,
    relatedToVideoId: videoId,
    type: constant.TYPE,
    key: constant.API_KEY
  });
};

/**
 * Function get comment of video
 * @param {string} videoId id of video
 */
export const getVideoComment = (videoId, videoAPI = api) => {
  const url = '/commentThreads';

  return videoAPI.get(url, {
    part: 'snippet,replies',
    textFormat: 'plainText',
    order: 'time',
    maxResults: 100,
    videoId: videoId,
    key: constant.API_KEY
  });
};

/**
 * createResource
 * @param {string} properties
 */
const createResource = (properties) => {
  let resource = {};
  let normalizedProps = properties;
  for (let p in properties) {
    let value = properties[p];
    if (p && p.substr(-2, 2) === '[]') {
      let adjustedName = p.replace('[]', '');
      if (value) {
        normalizedProps[adjustedName] = value.split(',');
      }
      delete normalizedProps[p];
    }
  }
  for (let prop in normalizedProps) {
    // Leave properties that don't have values out of inserted resource.
    if (normalizedProps.hasOwnProperty(prop) && normalizedProps[prop]) {
      let propArray = prop.split('.');
      let ref = resource;
      for (let pa = 0; pa < propArray.length; pa++) {
        let key = propArray[pa];
        if (pa === propArray.length - 1) {
          ref[key] = normalizedProps[prop];
        } else {
          ref = ref[key] = ref[key] || {};
        }
      }
    };
  }
  return resource;
};

const removeEmptyParams = (params) => {
  for (let p in params) {
    if (!params[p] || params[p] === 'undefined') {
      delete params[p];
    }
  }
  return params;
};

/**
 * Build API request to get data from authorized user
 * @param {object} gapi
 * @param {string} requestMethod
 * @param {string} path
 * @param {string} params
 * @param {string} properties
 */
export const buildApiRequest = (gapi, requestMethod, path, params, properties) => {
  params = removeEmptyParams(params);
  let request;
  if (properties) {
    let resource = createResource(properties);
    request = gapi.client.request({
      'body': resource,
      'method': requestMethod,
      'path': path,
      'params': params
    });
  } else {
    request = gapi.client.request({
      'method': requestMethod,
      'path': path,
      'params': params
    });
  }

  return request;
};

/**
 * Get playlist of an user
 */
export const getPlaylist = (gapi = window.gapi) => {
  return buildApiRequest(gapi, 'GET',
    `${constant.BASE_URL}/playlists`,
    {
      mine: 'true',
      maxResults: '25',
      part: 'snippet,contentDetails',
      onBehalfOfContentOwner: '',
      onBehalfOfContentOwnerChannel: ''
    });
};

/**
 * Get video from playlist
 * @param {string} playlistId
 */
export const getVideoFromPlaylist = (playlistId, gapi = window.gapi) => {
  return buildApiRequest(gapi, 'GET',
    `${constant.BASE_URL}/playlistItems`,
    {
      maxResults: '25',
      part: 'snippet,contentDetails',
      playlistId: playlistId
    });
};

/**
 * Insert comment to a video
 * @param {string} channelId
 * @param {string} videoId
 * @param {string} text
 */
export const insertComment = (channelId, videoId, text, gapi = window.gapi) => {
  return buildApiRequest(gapi, 'POST',
    `${constant.BASE_URL}/commentThreads`,
    { 'part': 'snippet' },
    {
      'snippet.channelId': channelId,
      'snippet.videoId': videoId,
      'snippet.topLevelComment.snippet.textOriginal': text
    });
};


// =========== Upload video ===========
/**
   * Helper for implementing retries with backoff. Initial retry
   * delay is 1 second, increasing by 2x (+jitter) for subsequent retries
   *
   * @constructor
   */
class RetryHandler {
  constructor() {
    this.interval = 1000; // Start at one second
    this.maxInterval = 60 * 1000; // Don't wait longer than a minute
  }

  /**
   * Invoke the function after waiting
   *
   * @param {function} fn Function to invoke
   */
  retry = (fn) => {
    setTimeout(fn, this.interval);
    this.interval = this.nextInterval_();
  };

  /**
 * Reset the counter (e.g. after successful request.)
 */
  reset = () => {
    this.interval = 1000;
  };

  /**
   * Calculate the next wait time.
   * @return {number} Next wait interval, in milliseconds
   *
   * @private
   */
  nextInterval_ = () => {
    const interval = this.interval * 2 + this.getRandomInt_(0, 1000);
    return Math.min(interval, this.maxInterval);
  };

  /**
   * Get a random int in the range of min to max. Used to add jitter to wait times.
   *
   * @param {number} min Lower bounds
   * @param {number} max Upper bounds
   * @private
   */
  getRandomInt_ = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
}

class MediaUploader {
  constructor(options) {
    const noop = function () { };
    this.file = options.file;
    this.contentType = options.contentType || this.file.type || 'application/octet-stream';
    this.metadata = options.metadata || {
      'title': this.file.name,
      'mimeType': this.contentType
    };
    this.token = options.token;
    this.onComplete = options.onComplete || noop;
    this.onProgress = options.onProgress || noop;
    this.onError = options.onError || noop;
    this.offset = options.offset || 0;
    this.chunkSize = options.chunkSize || 0;
    this.retryHandler = new RetryHandler();

    this.url = options.url;
    if (!this.url) {
      let params = options.params || {};
      params.uploadType = 'resumable';
      this.url = this.buildUrl_(options.fileId, params, options.baseUrl);
    }
    this.httpMethod = options.fileId ? 'PUT' : 'POST';
  }

  /**
   * Initiate the upload.
   */

  upload = () => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(this.httpMethod, this.url, true);
      xhr.setRequestHeader('Authorization', 'Bearer ' + this.token);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('X-Upload-Content-Length', this.file.size);
      xhr.setRequestHeader('X-Upload-Content-Type', this.contentType);

      xhr.onload = function (e) {
        if (e.target.status < 400) {
          const location = e.target.getResponseHeader('Location');
          this.url = location;
          this.sendFile_(resolve);
        } else {
          this.onUploadError_(e);
        }
      }.bind(this);
      xhr.onerror = this.onUploadError_.bind(this);
      xhr.send(JSON.stringify(this.metadata));
    });
  };

  /**
   * Send the actual file content.
   *
   * @private
   */

  sendFile_ = (resolve, reject) => {
    let content = this.file;
    let end = this.file.size;

    if (this.offset || this.chunkSize) {
      // Only slice the file if we're either resuming or uploading in chunks
      if (this.chunkSize) {
        end = Math.min(this.offset + this.chunkSize, this.file.size);
      }
      content = content.slice(this.offset, end);
    }

    const xhr = new XMLHttpRequest();
    xhr.open('PUT', this.url, true);
    xhr.setRequestHeader('Content-Type', this.contentType);
    xhr.setRequestHeader('Content-Range', 'bytes ' + this.offset + '-' + (end - 1) + '/' + this.file.size);
    xhr.setRequestHeader('X-Upload-Content-Type', this.file.type);
    if (xhr.upload) {
      xhr.upload.addEventListener('progress', this.onProgress);
    }

    xhr.onload = (e) => {
      if (e.target.status === 200 || e.target.status === 201) {
        this.onComplete(e.target.response);

        // Get target and return to Promise
        resolve(e.target);

      } else if (e.target.status === 308) {
        this.extractRange_(e.target);
        this.retryHandler.reset();
        this.sendFile_();
      }
    };

    xhr.onerror = (e) => {
      if (e.target.status && e.target.status < 500) {
        this.onError(e.target.response);
        reject(e.target.response);
      } else {
        this.retryHandler.retry(this.resume_.bind(this));
      }
    };
    xhr.send(content);
  };

  /**
 * Query for the state of the file for resumption.
 *
 * @private
 */
  resume_ = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', this.url, true);
    xhr.setRequestHeader('Content-Range', 'bytes */' + this.file.size);
    xhr.setRequestHeader('X-Upload-Content-Type', this.file.type);
    if (xhr.upload) {
      xhr.upload.addEventListener('progress', this.onProgress);
    }
    xhr.onload = this.onContentUploadSuccess_.bind(this);
    xhr.onerror = this.onContentUploadError_.bind(this);
    xhr.send();
  };


  /**
   * Extract the last saved range if available in the request.
   *
   * @param {XMLHttpRequest} xhr Request object
   */
  extractRange_ = (xhr) => {
    const range = xhr.getResponseHeader('Range');
    if (range) {
      this.offset = parseInt(range.match(/\d+/g).pop(), 10) + 1;
    }
  };

  /**
   * Handles errors for the initial request.
   *
   * @private
   * @param {object} e XHR event
   */
  onUploadError_ = (e) => {
    this.onError(e.target.response); // TODO - Retries for initial upload
  };

  /**
   * Construct a query string from a hash/object
   *
   * @private
   * @param {object} [params] Key/value pairs for query string
   * @return {string} query string
   */
  buildQuery_ = (params) => {
    params = params || {};
    return Object.keys(params).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');
  };

  /**
   * Build the upload URL
   *
   * @private
   * @param {string} [id] File ID if replacing
   * @param {object} [params] Query parameters
   * @return {string} URL
   */
  buildUrl_ = (id, params, baseUrl) => {
    let url = baseUrl;
    if (id) {
      url += id;
    }
    let query = this.buildQuery_(params);
    if (query) {
      url += '?' + query;
    }
    return url;
  };
}

/**
 * Upload video to server
 */
export function uploadVideoAPI(selectedFile, gapi = window.gapi) {
  const metadata = createResource({
    'snippet.categoryId': '22',
    'snippet.defaultLanguage': '',
    'snippet.description': 'Description of uploaded video.',
    'snippet.tags[]': '',
    'snippet.title': 'The video of user',
    'status.embeddable': '',
    'status.license': '',
    'status.privacyStatus': 'private',
    'status.publicStatsViewable': ''
  });
  const token = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse(true).access_token;

  if (!token) {
    alert('You need to authorize the request to proceed.');
    return;
  }

  if (!selectedFile) {
    alert('You need to select a file to proceed.');
    return;
  }
  const params = { 'part': 'snippet,status' };

  const uploader = new MediaUploader({
    baseUrl: 'https://www.googleapis.com/upload/youtube/v3/videos',
    file: selectedFile,
    token: token,
    metadata: metadata,
    params: params,
    onError: function (data) {
      let message = data;
      try {
        const errorResponse = JSON.parse(data);
        message = errorResponse.error.message;
      } finally {
        alert(message);
      }
    },
    onProgress: function (data) {
      console.log('Progress: ' + data.loaded + ' bytes loaded out of ' + data.total);
    },
    onComplete: function (data) {
      const uploadResponse = JSON.parse(data);
      console.log('Upload complete for video ' + uploadResponse.id);
    }
  });

  return uploader.upload();
}
