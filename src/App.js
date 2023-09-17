import Header from "./components/Header";
import Firstpage from "./components/Firstpage";
import Secondpage from "./components/secondpage";
import About from "./components/Aboutus";
import Plans from "./components/plans";

import "./styles/header.css";
import './styles/firstPageContainer.css';
import './styles/secondPage.css';
import './styles/about.css';
import './styles/plans.css';

function App() {
  return (
    <>
    <Header />
    <Firstpage />
    <Secondpage />
    <About />
    <Plans />
    </> 
  );
}

export default App;
