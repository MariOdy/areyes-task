import React, { useState } from "react";


import Info from "@/public/svg/Info";
import Share from "@/public/svg/Share";
import Reload from "@/public/svg/Reload";
import Capture from "@/public/svg/Capture";
import Recognition from "@/public/svg/Recognition";

import styles from "./styles.module.scss";
interface ControlsProps {
  handleReset: () => void;
  handleCapture: () => void;
  handleInfo: () => void;
  handleRecognition: () => void;
  countPhoto: number;
  picture: string | null;
}

const Controls: React.FC<ControlsProps> = ({
  handleReset,
  handleCapture,
  handleInfo,
  handleRecognition,
  countPhoto,
  picture,
}) => {
  const handleShare = () => {};

  return (
    <div className={styles.controls_wrapper}>
      <button type="button" onClick={handleRecognition}>
        <Recognition />
      </button>
      <div className={styles.main_btn}>
        <div>{countPhoto}/3</div>
        <button type="button" onClick={picture ? handleReset : handleCapture}>
          {picture ? <Reload /> : <Capture />}
        </button>
      </div>

      <div className={styles.info_share}>
        <button type="button" onClick={handleShare}>
          <Share />
        </button>
        <button type="button" onClick={handleInfo}>
          <Info />
        </button>
      </div>
    </div>
  );
};

export default Controls;
