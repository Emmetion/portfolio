import React, { useState } from "react";
import Technologies from "./Technologies/Technologies";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import About from "./About/About";

export default function App() {
  const [currentView, setCurrentView] = useState("about");

  const renderView = () => {
    switch (currentView) {
      case "about":
        return <About />;
      case "technologies":
        return <Technologies />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="h-screen">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      {renderView()}
    </div>
  );
}
