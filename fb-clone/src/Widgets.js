import React from "react";
import "./Widgets.css";
const Widgets = () => {
  return (
    <div className="widgets">
      <iframe
        src="https://www.youtube.com/"
        width="340"
        height="100%"
        scrolling="no"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default Widgets;
