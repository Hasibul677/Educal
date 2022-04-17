import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import NotFound from "./components/NotFound/NotFound";
import Services from "./components/Services/Services";

function App() {
  // for showing serveice field daynamically
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const array1 = [0, 1, 2, 3];
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Hero></Hero>
            <Services array={array1}></Services>
          </Route>
          <Route path="/home">
            <Hero></Hero>
            <Services array={array1}></Services>
          </Route>
          <Route path="/service">
            <Services array={array}></Services>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
