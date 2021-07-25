import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import Vlog from "./Components/Vlog";
import About from "./Components/About";
import Colleges from "./Components/Colleges";
import Appreciation from "./Components/Appreciation";
import Types from "./Components/Types";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Speciality from "./Components/Speciality";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Types />
      <Speciality />
      <Appreciation />
      <Card />
      <Colleges />
      <About />
      <Vlog />
      <Footer />
    </div>
  );
}
