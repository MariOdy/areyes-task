import React from "react";

interface CameraPreviewProps {
  videoRef: React.RefObject<HTMLVideoElement>;
}

const CameraPreview: React.FC<CameraPreviewProps> = ({ videoRef }) => {
  return <video ref={videoRef} autoPlay playsInline />;
};

export default CameraPreview;
