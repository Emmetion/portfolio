import React from "react";
import DesktopHeader from "./DesktopHeader/DesktopHeader";
import MobileHeader from "./MobileHeader/MobileHeader";

import "./Header.css";

export default function Header({ currentView, setCurrentView }) {
  return (
    <div>
      <div className="desktop-header">
        <DesktopHeader
          currentView={currentView}
          setCurrentView={setCurrentView}
        />
      </div>
      <div className="mobile-header">
        <MobileHeader
          currentView={currentView}
          setCurrentView={setCurrentView}
        />
      </div>
    </div>
  );
}
