import React, { useMemo } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import useScreenshot from "@/utils/useScreenshot";
import useRefState from "@/utils/useRefState";
import useToggle from "@/utils/useToggle";

interface CameraContextProps {
  // Refs
  videoRef: React.RefObject<HTMLVideoElement>;
  videoElement: HTMLVideoElement | null;
  workAreaRef: React.RefObject<HTMLDivElement>;
  workAreaElement: HTMLDivElement | null;

  // Screenshots
  screenshots: string[];
  takeScreenshot: () => void;
  shareScreenshots: () => void;
  isProcessing: boolean;
  showPreview: boolean;
  togglePreview: () => void;

  // Face recognition
  showFaceRecognition: boolean;
  toggleRecognition: () => void;
}

const defaultContext = {} as unknown as CameraContextProps;

const CameraContext = React.createContext<CameraContextProps>(defaultContext);

export const useCameraContext = () => React.useContext(CameraContext);

interface CameraContextProviderProps {
  children: React.ReactNode;
}

const CameraContextProvider: React.FC<CameraContextProviderProps> = ({
  children,
}) => {
  // Stored Refs
  const [videoRef, videoElement] = useRefState<HTMLVideoElement>();
  const [workAreaRef, workAreaElement] = useRefState<HTMLDivElement>();

  // Taken Screenshots
  const {
    screenshots,
    takeScreenshot,
    shareScreenshots,
    isProcessing,
    showPreview,
    togglePreview,
  } = useScreenshot(videoRef);

  // Face Recognition
  const [showFaceRecognition, toggleRecognition] = useToggle(false);

  const value: CameraContextProps = useMemo(
    () => ({
      // Refs
      videoRef,
      videoElement,
      workAreaRef,
      workAreaElement,

      // Screenshots
      screenshots,
      takeScreenshot,
      shareScreenshots,
      isProcessing,
      showPreview,
      togglePreview,

      // Face recognition
      showFaceRecognition,
      toggleRecognition,
    }),
    [
      // Refs
      videoRef,
      videoElement,
      workAreaRef,
      workAreaElement,

      // Screenshots
      screenshots,
      takeScreenshot,
      shareScreenshots,
      isProcessing,
      showPreview,
      togglePreview,

      // Face recognition
      showFaceRecognition,
      toggleRecognition,
    ]
  );

  return (
    <CameraContext.Provider value={value}>
      <Dialog.Root>{children}</Dialog.Root>
    </CameraContext.Provider>
  );
};

export default CameraContextProvider;
