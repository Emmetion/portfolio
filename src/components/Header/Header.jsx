import React from "react";
import DesktopHeader from "./DesktopHeader/DesktopHeader";
import MobileHeader from "./MobileHeader/MobileHeader";

import "./Header.css";

export default function Header() {
  return (
    <div>
      <div className="desktop-header">
        <DesktopHeader />
      </div>
      <div className="mobile-header">
        <MobileHeader />
      </div>
    </div>
  );
}
