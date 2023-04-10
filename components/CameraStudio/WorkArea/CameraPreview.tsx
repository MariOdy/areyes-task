"use client";

import React, { useEffect, useCallback } from "react";

import { useCameraContext } from "../context";

const CameraPreview: React.FC = () => {
  const { videoRef } = useCameraContext();

  // Link user's webcam to the video tag
  const linkWebCam = useCallback(async () => {
    if (!videoRef.current) return;

    if (!navigator?.mediaDevices) {
      console.warn("Can't access navigator in localhost");
      return;
    }

    try {
      // Access the user's camera using WebRTC
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          aspectRatio: { ideal: 0.8 },
          facingMode: { ideal: "user" },
        },
      });

      videoRef.current.srcObject = stream;
    } catch (err) {
      // Probably, can't access navigator in localhost, or user doesn't have any devices to show
      console.error("Error accessing camera: ", err);
    }
  }, [videoRef]);

  // Link webcam to the video on mount
  useEffect(() => {
    linkWebCam();
  }, [linkWebCam]);

  return <video ref={videoRef} autoPlay playsInline />;
};

export default CameraPreview;
