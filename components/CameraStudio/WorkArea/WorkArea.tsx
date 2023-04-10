"use client";
import Spinner from "@/components/icons/Spinner";

import { useCameraContext } from "../context";

import InfoCover from "../InfoCover";
import PhotoPreview from "./PhotoPreview";
import CameraPreview from "./CameraPreview";
import RecognitionCover from "../RecognitionCover";

import styles from "./styles.module.scss";

const WorkArea = () => {
  const { workAreaRef, screenshots, showPreview, isProcessing } =
    useCameraContext();

  const lastScreenshot = screenshots.at(-1);

  return (
    <div className={styles.workArea}>
      <div ref={workAreaRef} className={styles.area}>
        {showPreview && lastScreenshot ? (
          // Show preview of the last taken image
          <PhotoPreview imageSrc={lastScreenshot} />
        ) : (
          // Show live preview of the webcam
          <CameraPreview />
        )}
        <InfoCover />
        <RecognitionCover />

        {/* Show loading spinner */}
        {isProcessing && (
          <div className={styles.spinner}>
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkArea;
