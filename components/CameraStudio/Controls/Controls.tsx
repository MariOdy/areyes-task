import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

import Info from "@/components/icons/Info";
import Share from "@/components/icons/Share";
import Reload from "@/components/icons/Reload";
import Capture from "@/components/icons/Capture";
import Recognition from "@/components/icons/Recognition";

import { useCameraContext } from "../context";

import styles from "./styles.module.scss";

const Controls: React.FC = () => {
  const {
    toggleRecognition,
    shareScreenshots,
    screenshots,
    showPreview,
    takeScreenshot,
    togglePreview,
  } = useCameraContext();

  return (
    <div className={styles.controls_wrapper}>
      {/* Show/Hide 'Recognition' UI */}
      <button type="button" onClick={toggleRecognition} disabled={showPreview}>
        <Recognition />
      </button>

      <div className={styles.main_btn}>
        <div>{screenshots.length}/3</div>
        {showPreview && screenshots.length > 0 ? (
          // Close Image preview
          <button type="button" onClick={togglePreview}>
            <Reload />
          </button>
        ) : (
          // Take screenshot
          <button type="button" onClick={takeScreenshot}>
            <Capture />
          </button>
        )}
      </div>

      <div className={styles.info_share}>
        {/* Share taken screenShots */}
        <button
          type="button"
          onClick={shareScreenshots}
          disabled={screenshots.length === 0}
        >
          <Share />
        </button>

        {/* Show 'Info' Dialog */}
        <Dialog.Trigger>
          <Info />
        </Dialog.Trigger>
      </div>
    </div>
  );
};

export default Controls;
