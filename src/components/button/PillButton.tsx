import "../../styles/buttons.scss"
import React from "react";

const PillButton = ({ label }: { label: string }) => {
  return (
    <div>
      <button className="pill-button">{label}</button>
    </div>
  );
};

export default PillButton;
