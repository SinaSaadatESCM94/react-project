import React from "react";
import "./HeaderTitle.scss";

function HeaderTitle() {
  return (
    <header className="w-100 d-flex align-items-center justify-content-center position-sticky top-0 left-0">
      <h1>{`Marvel Cinematic Universe (MCU)`}</h1>
    </header>
  );
}

export default HeaderTitle;
