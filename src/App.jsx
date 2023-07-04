import { useRef } from "react";
import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import Navigation from "./components/Navigation";
import SoundSection from "./components/SoundSection";
import WebgiViewer from "./components/WebgiViewer";
import Loader from "./components/Loader";

const App = () => {
  const webgiViewerRed = useRef();
  const contentRef = useRef();

  const handlePreview = () => {
    webgiViewerRed.current.triggerPreview();
  };

  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} id="content">
        <Navigation />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRed} />
    </div>
  );
};

export default App;
