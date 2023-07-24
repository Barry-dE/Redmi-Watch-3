import { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import scroll from "./animation/smoothScroll";
import split from "./animation/textAnim";
import Watch from "./components/Watch/Watch";

scroll();

function App() {
  useEffect(() => {
    split();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Watch />
    </>
  );
}

export default App;
