import React from "react";
import Footer from "../footer";
import One from "../sectionOne";
import Testimony from "../sectionTwo";
import SecSection from "../secondSec";

export default function Home() {
  return (
    <div className="App">
      <One />
      <Testimony />
      <SecSection />
      <Footer />
    </div>
  );
}
