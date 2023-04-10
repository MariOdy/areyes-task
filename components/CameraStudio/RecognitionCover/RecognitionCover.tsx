import React from "react";
import ScanBorder from "@/components/icons/ScanBorder";

import { useCameraContext } from "../context";

import styles from "./styles.module.scss";

const RecognitionCover: React.FC = () => {
  const { showFaceRecognition } = useCameraContext();

  if (showFaceRecognition !== true) return null;

  return (
    <div className={`${styles.recognition} faceRecognition`}>
      <ScanBorder />
      <div className={styles.tooltip}>“Who is this cutest kitty?”</div>
    </div>
  );
};

export default RecognitionCover;
