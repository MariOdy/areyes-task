export const videoToDataURL = (videoElement: HTMLVideoElement): string => {
  if (!videoElement) {
    throw new Error("Video element wasn't provided");
  }

  // Create canvas element to store the screenshot
  const canvas = document.createElement("CANVAS") as HTMLCanvasElement;

  canvas.width = videoElement.videoWidth;
  canvas.height = videoElement.videoHeight;

  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("Failed to get a 2d context");
  }

  // Save video data to the canvas
  context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
  const dataUrl = canvas.toDataURL("image/png");

  // Clearup created context
  canvas.remove();

  return dataUrl;
};

/** Share selected pictures via 'navigator.share' API */
export const sharePictures = async (pictures: string[]) => {
  if (!Array.isArray(pictures) || pictures.length === 0) return;

  // Convert array of pictures to 'File' format
  const filesArray = pictures.map(
    (image) =>
      new File([image], "meme.png", {
        type: "image/png",
        lastModified: new Date().getTime(),
      })
  );

  // Use native 'navigator.share' API to share pictures
  return navigator.share({
    files: filesArray,
  });
};
