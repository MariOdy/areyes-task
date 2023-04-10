"use client";
import { useState, useCallback } from "react";

import useToggle from "@/utils/useToggle";
import { videoToDataURL, sharePictures } from "@/utils/utils";

/** Custom logic for handling screenshots of the video */
const useScreenshot = (
  videoRef: React.RefObject<HTMLVideoElement>,
  { max = 3 } = {}
) => {
  /** Array of last taken screenshots */
  const [screenshots, setScreenshots] = useState<string[]>([]);

  /** Show 'loading' spinner when processing the image */
  const [isProcessing, toggleProcessing] = useToggle(false);

  /** Show preview of the last taken screenshot */
  const [showPreview, togglePreview] = useToggle(false);

  /** Take screenshot of the video and save it to the state */
  const takeScreenshot = useCallback(async () => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    const dataUrl = videoToDataURL(video);

    // Save taken screenshot. Remove old screenshot
    setScreenshots((prev) => [...prev, dataUrl].slice(-max));

    // Toggle preview of the taken screenshot
    togglePreview();

    // Show 'loading' spinner
    toggleProcessing();

    // Simulate loading, sleep for 2-3 seconds
    await new Promise((r) => setTimeout(r, 2000));

    // Hide 'loading' spinner
    toggleProcessing();
  }, [videoRef, toggleProcessing, togglePreview, max]);

  /** Share taken screenshots via 'navigator.share' API */
  const shareScreenshots = useCallback(async () => {
    await sharePictures(screenshots);
  }, [screenshots]);

  return {
    screenshots,
    takeScreenshot,
    isProcessing,
    shareScreenshots,
    showPreview,
    togglePreview,
  };
};

export default useScreenshot;
