import React from "react";
import Image from "next/image";

interface PhotoPreviewProps {
  imageSrc: string;
}

const PhotoPreview: React.FC<PhotoPreviewProps> = ({ imageSrc }) => {
  if (!imageSrc) return null;
  return (
    <Image src={imageSrc} fill alt="Taken picture" className="photoPreview" />
  );
};

export default PhotoPreview;
