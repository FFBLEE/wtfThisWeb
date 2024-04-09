import React from "react";
import "./LineWithTitle.css";

const LineWithTitle = ({ title, subtitle, marginTop }) => {
  return (
    <div>
      <div className="line-with-title" style={{ marginTop }}>
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
      </div>
      <div className="line" />
    </div>
  );
};

export default LineWithTitle;
