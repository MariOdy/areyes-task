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
  const dataUrl = canvas.toDataURL("image/jpeg");

  // Clearup created context
  canvas.remove();

  return dataUrl;
};

/** Share selected pictures via 'navigator.share' API */
export const sharePictures = async (pictures: string[]) => {
  if (!Array.isArray(pictures) || pictures.length === 0) return;

  if (typeof navigator.share !== "function") {
    console.warn("Sharing is not available");
    return;
  }

  // Convert array of base64 strings to Blob objects
  const blobArray = await Promise.all(
    pictures.map(async (base64String) => {
      const response = await fetch(base64String);
      const blob = await response.blob();
      return blob;
    })
  );

  // Convert array of Blob objects to File objects
  const filesArray = blobArray.map(
    (blob, index) =>
      new File([blob], `me_${index}.jpg`, {
        type: "image/jpeg",
        lastModified: new Date().getTime(),
      })
  );

  // Use native 'navigator.share' API to share pictures
  return navigator.share({
    files: filesArray,
  });
};
