"use client";
import React from "react";

import CameraContextProvider from "./context";

import WorkArea from "./WorkArea";
import Controls from "./Controls";

import styles from "./styles.module.scss";

const CameraStudio: React.FC = () => (
  <CameraContextProvider>
    <div className={styles.studio}>
      <WorkArea />
      <Controls />
    </div>
  </CameraContextProvider>
);

export default CameraStudio;
