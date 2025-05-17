import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import GetData from "./component/GetData";
import Nav from "./component/Nav";
import Home from "./component/Home";
// GSAP
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { GSDevTools } from "gsap/GSDevTools";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, GSDevTools, ScrollTrigger);

function App() {
  const queryClient = new QueryClient();
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".Nav",
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" }
    );
    tl.fromTo(
      ".Home",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1,
        ease: "power2.inOut",
      },
      "-=1.3"
    );
   
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col items-center justify-center ">
          <Nav className="Nav" />
          <Home className="Home" />
          <GetData  />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
