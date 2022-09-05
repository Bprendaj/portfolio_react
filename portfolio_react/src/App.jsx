import Topbar from "./components/topbar/Topbar";
import Intro from"./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import "./app.scss"

function App() {
  return (
    <div className="app">
    <Topbar/>
    <Menu/>
    <div className="sections">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Contact/>
    </div>
    </div>
  );
}

export default App;
