import { useEffect } from "react";
import Hero from "./ui/Hero";
import Watch from "./ui/Watch";
import Entry from "./app/index";
import Health from "./ui/health";

function App() {
      useEffect(() => {
            new Entry();
      }, []);

      return (
            <main>
                  <Hero />
                  <Watch />
                  <Health />
            </main>
      );
}

export default App;
