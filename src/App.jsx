import { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import scroll from "./animation/smoothScroll";
import Watch from "./components/Watch/Watch";
import split from "./animation/textAnim";
scroll();

function App() {
  useEffect(() => {
    split();
  });
  return (
    <>
      <Header />
      <Hero />
      <Watch />
    </>
  );
}

export default App;
