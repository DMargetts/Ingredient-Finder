import React from "react";

const FaceBox = props => {
  return (
    <>
      <img
        className="faceDetector"
        src={props.image}
        alt="Ingredients Detector"
      />
    </>
  );
};

export default FaceBox;
