"use client";
import React, { useState, useEffect, useRef } from "react";

import PhotoPreview from "./PhotoPreview";
import CameraPreview from "./CameraPreview";

const CameraInterface: React.FC = () => {
  const [key, setKey] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    // Access the user's camera using WebRTC
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream: MediaStream) => {
        // Attach the camera stream to the video element
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Error accessing camera: ", err);
      });
  }, [key]);

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const context = canvas.getContext("2d");

      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL("image/png");
        setImageSrc(dataUrl);
      }
    }
  };

  const handleReset = () => {
    setImageSrc(null);
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <div>
      {imageSrc ? (
        <PhotoPreview imageSrc={imageSrc} handleReset={handleReset} />
      ) : (
        <CameraPreview
          key={key}
          videoRef={videoRef}
          handleCapture={handleCapture}
        />
      )}
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
};
export default CameraInterface;
