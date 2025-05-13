import React from "react";
import BentoGrid from "./components/BentoGrid";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col gap-16 justify-center items-center my-10">
      <BentoGrid />
      <Footer />
    </div>
  );
};

export default App;
