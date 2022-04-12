import React, { Component } from 'react';
import DetailVideoContainer from '../../containers/detail/DetailVideoContainer';
import RelatedVideoContainer from '../../containers/related-video/RelatedVideoContainer';
import DetailStyled from './DetailStyled';

class Detail extends Component {

  render() {
    const selectedId = this.props.match.params.id;

    return (
      <div>
        <DetailStyled className="container-fuild">
          <div className="row">
            <div className="col-8">
              <DetailVideoContainer
                selectedVideoId={selectedId}
              />
            </div>
            <div className="col-4">
              <RelatedVideoContainer />
            </div>
          </div>
        </DetailStyled>
      </div>
    );
  }
}

export default Detail;