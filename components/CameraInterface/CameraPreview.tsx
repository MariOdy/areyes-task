import React from "react";
import Controls from "../Controls";

import styles from "./styles.module.scss";

interface CameraPreviewProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  handleCapture: () => void;
}

const CameraPreview: React.FC<CameraPreviewProps> = ({
  videoRef,
  handleCapture,
}) => {
  return (
    <div className="flex flex-col">
      <div className={styles.cameraPreview_wrapper}>
        <video ref={videoRef} autoPlay playsInline />
      </div>
      <Controls onClick={handleCapture} label="capture" />
    </div>
  );
};

export default CameraPreview;
