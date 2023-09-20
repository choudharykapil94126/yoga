import Header from "./components/Header";
import Firstpage from "./components/Firstpage";
import Secondpage from "./components/secondpage";
import About from "./components/Aboutus";
import Plans from "./components/plans";
import Footer from "./components/footer";
import Coaches from "./components/coaches";
import Client from "./components/clients.js";

import "./styles/header.css";
import './styles/firstPageContainer.css';
import './styles/secondPage.css';
import './styles/about.css';
import './styles/plans.css';
import './styles/footer.css';
import './styles/coaches.css';
import './styles/client.css';

function App() {
  return (
    <>
    <Header />
    <Firstpage />
    <Secondpage />
    <About />
    <Plans />
    <Coaches />
    <Client />
    <Footer />
    </> 
  );
}

export default App;
