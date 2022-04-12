import React, { Component } from 'react';
import Indicator from '../indicator/Indicator';
import Button from '../common/button/Button';
import withHideItem from '../common/HOC/withHideItem';
import PropTypes from 'prop-types';

class CommentInputGroup extends Component {
  constructor(props) {
    super(props);
    this.commentInput = null;
  }

  /**
   * Set input ref
   */
  setInputRef = (element) => {
    this.commentInput = element;
  }

  handleClickCancel = () => {
    this.commentInput.value = '';
  }

  handleClickSubmit = (selectedChannelId, selectedVideoId) => {
    const commentContent = this.commentInput.value;

    // Check comment not empty
    if (commentContent) {
      this.props.postComment(selectedChannelId, selectedVideoId, commentContent);
    } else {
      alert('The comment cannot be empty');
    }
  }

  render() {
    const { selectedVideo, isPosting } = this.props;

    return (
      <div>
        {isPosting
          ? <Indicator
            loadingWidth={20}
            loadingHeight={20}
          />
          : <div className="comment-wrap">
            <input
              className="comment-box"
              type="text"
              placeholder="Add a public comment..."
              ref={this.setInputRef}
            />
            <div className="btn-comment-wrap">
              <Button
                btnClass="btn btn-cancel"
                btnBackground="transparent"
                textColor="#6e514a"
                text={'Cancel'}
                btnFontSize='14'
                handleClick={this.handleClickCancel}
              />
              <Button
                btnClass="btn btn-submit"
                btnBackground="#0093E0"
                textColor="#fff"
                text={'Comment'}
                btnFontSize='14'
                handleClick={() => this.handleClickSubmit(selectedVideo.snippet.channelId, selectedVideo.id)}
              />
            </div>
          </div>
        }
      </div>
    );
  }
}

CommentInputGroup.propTypes = {
  isPosting: PropTypes.bool
};

CommentInputGroup.defaultProps = {
  isPosting: false
};

export { CommentInputGroup };
export default withHideItem(CommentInputGroup);
