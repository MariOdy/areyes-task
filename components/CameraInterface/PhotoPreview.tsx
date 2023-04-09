import React from "react";
import Image from "next/image";
import Controls from "../Controls";

import styles from "./styles.module.scss";

interface PhotoPreviewProps {
  imageSrc: string;
  handleReset: () => void;
}

const PhotoPreview: React.FC<PhotoPreviewProps> = ({
  imageSrc,
  handleReset,
}) => {
  return (
    <div className="flex flex-col">
      <div className={styles.cameraPreview_wrapper}>
        <Image src={imageSrc} alt="my photo" width={390} height={488} />
      </div>
      <Controls onClick={handleReset} label="reset" />
    </div>
  );
};

export default PhotoPreview;
