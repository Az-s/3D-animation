import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import Navigation from "./components/Navigation";
import SoundSection from "./components/SoundSection";
import WebgiViewer from "./components/WebgiViewer";

const App = () => {

  return (
    <div className="App">
      <Navigation />
      <Jumbotron />
      <SoundSection />
      <DisplaySection />
      <WebgiViewer />
    </div>
  );
}

export default App;
