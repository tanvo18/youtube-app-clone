
export const BASE_URL = 'https://www.googleapis.com/youtube/v3';
export const CHART = 'mostPopular';
export const REGION_CODE = 'US';
export const PART = 'snippet,contentDetails,statistics';
export const MAX_RESULT = 20;
export const TYPE = 'video';
export const API_KEY = process.env.REACT_APP_API_KEY;
export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
export const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'];
export const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner';
export const STORAGE_ACCESS_TOKEN = 'accesstoken';
