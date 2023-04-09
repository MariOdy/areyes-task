import React from "react";
import Image from "next/image";

interface PhotoPreviewProps {
  imageSrc: string;
}

const PhotoPreview: React.FC<PhotoPreviewProps> = ({ imageSrc }) => {
  return <Image src={imageSrc} alt="my photo" width={390} height={488} />;
};

export default PhotoPreview;
