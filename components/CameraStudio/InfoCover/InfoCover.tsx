import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { useCameraContext } from "../context";

import styles from "./styles.module.scss";

const InfoCover: React.FC = () => {
  const { workAreaElement } = useCameraContext();

  return (
    <Dialog.Portal container={workAreaElement}>
      <Dialog.Overlay asChild>
        <div className={`${styles.cover} infoContainer`}>
          <Dialog.Content className={styles.content}>
            <p className="text-[16px] text-black">
              &quot;This service does not collect or store any user metadata.
              <br />
              <br />
              We do not track or monitor user activity, nor do we collect any
              information about user behavior or preferences.&quot;
            </p>
            <Dialog.Close>Got it!</Dialog.Close>
          </Dialog.Content>
        </div>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
};

export default InfoCover;
