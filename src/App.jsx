import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import Navigation from "./components/Navigation";
import SoundSection from "./components/SoundSection";

function App() {

  return (
    <div className="App">
      <Navigation />
      <Jumbotron />
      <SoundSection />
      <DisplaySection />
    </div>
  );
}

export default App;
