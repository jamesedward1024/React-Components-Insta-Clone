import React from "react";
import "../PostsContainer/Posts.css";
const LikeSection = props => {
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <i className="far fa-heart" />
        </div>
        <div className="like-section-wrapper">
          <i className="far fa-comment" />
        </div>
      </div>
      <p className="like-number" onClick={props.likesIncrease}>{props.likes} likes</p>
    </div>
  );
};

export default LikeSection;
