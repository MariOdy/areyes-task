import React from "react";
import ScanBorder from "@/public/svg/ScanBorder";

import styles from "./styles.module.scss";

const RecognitionCover: React.FC = () => {
  return (
    <div className={styles.cover}>
      <ScanBorder />
      <div>
      “Who is this cutest kitty?”
      </div>
    </div>
  );
};

export default RecognitionCover;
