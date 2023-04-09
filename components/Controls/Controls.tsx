import React, { useState } from "react";

import Info from "@/public/Info";
import Recognition from "@/public/Recognition";

import styles from "./styles.module.scss";
import Reload from "@/public/Reload";
import Capture from "@/public/Capture";
import Share from "@/public/Share";

interface ControlsProps {
  onClick: () => void;
  label: "reset" | "capture";
}

const Controls: React.FC<ControlsProps> = ({ onClick, label }) => {
  const [recognized, setRecognized] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleRecognition = () => {
    setRecognized((prev) => !prev);
    setDisabled((prev) => !prev);
  };

  const handleShare = () => {
    if (disabled) {
      alert(`you can't share in recognition mode`);
      return null;
    }
    return alert("share");
  };

  return (
    <div className={styles.controls_wrapper}>
      <button
        type="button"
        onClick={handleRecognition}
        data-recognized={recognized}
      >
        <Recognition />
      </button>
      <button onClick={onClick} type="button">
        {label === "reset" ? <Reload /> : <Capture />}
      </button>
      <div className={styles.info_share}>
        <button type="button" data-disabled={disabled} onClick={handleShare}>
          <Share />
        </button>
        <button>
          <Info />
        </button>
      </div>
    </div>
  );
};

export default Controls;
