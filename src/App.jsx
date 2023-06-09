import { Download } from "./components/download/Download";
import { Featured } from "./components/featured/Featured";
import { Footer } from "./components/footer/Footer";
import { Info } from "./components/info/Info";
import { Intro } from "./components/intro/Intro";
import { Navbar } from "./components/navbar/Navbar";
import { RentNow } from "./components/rentNow/RentNow";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Intro />
      <RentNow />
      <Info />
      <Featured />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
