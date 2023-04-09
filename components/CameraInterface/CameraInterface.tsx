"use client";
import React, { useState, useEffect, useRef } from "react";

import Controls from "../Controls";
import InfoCover from "../InfoCover";
import PhotoPreview from "../PhotoPreview/PhotoPreview";
import CameraPreview from "../CameraPreview/CameraPreview";

import styles from "./styles.module.scss";
import RecognitionCover from "../RecognitionCover";

const CameraInterface: React.FC = () => {
  const [key, setKey] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [infoCover, setInfoCover] = useState<boolean>(false);
  const [recognitionCover, setRecognitionCover] = useState<boolean>(false);
  const [countPhoto, setCountPhoto] = useState<number>(0);

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
    if (!infoCover) {
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
      setRecognitionCover(false);
      if (countPhoto < 3) {
        setCountPhoto((prev) => prev + 1);
      }
    }
  };

  const handleReset = () => {
    setImageSrc(null);
    setKey((prevKey) => prevKey + 1);
    if (countPhoto === 3) {
      setCountPhoto(0);
    }
  };

  const handleInfo = () => {
    setInfoCover(true);
    setRecognitionCover(false);
  };
  const handleAgreement = () => {
    setInfoCover(false);
  };
  const handleRecognition = () => {
    if (!imageSrc && !infoCover) {
      setRecognitionCover((prev) => !prev);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-[12px] relative">
        {infoCover && <InfoCover handleAgreement={handleAgreement} />}
        {recognitionCover && <RecognitionCover />}
        <div className={styles.cameraPreview_wrapper}>
          {imageSrc ? (
            <PhotoPreview imageSrc={imageSrc} />
          ) : (
            <CameraPreview key={key} videoRef={videoRef} />
          )}
        </div>
        <Controls
          handleReset={handleReset}
          handleCapture={handleCapture}
          handleInfo={handleInfo}
          handleRecognition={handleRecognition}
          countPhoto={countPhoto}
          picture={imageSrc}
        />
      </div>
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
};

export default CameraInterface;
