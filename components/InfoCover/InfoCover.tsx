import React from "react";
import styles from "./styles.module.scss";

interface InfoCoverProps {
  handleAgreement: () => void;
}

const InfoCover: React.FC<InfoCoverProps> = ({ handleAgreement }) => {
  return (
    <div className={styles.cover}>
      <div>
        <p className="text-[16px] text-black">
          &quot;This service does not collect or store any user metadata.
          <br />
          <br />
          We do not track or monitor user activity, nor do we collect any
          information about user behavior or preferences.&quot;
        </p>
        <button type="button" onClick={handleAgreement}>
          GOT IT!
        </button>
      </div>
    </div>
  );
};

export default InfoCover;
