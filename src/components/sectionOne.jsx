import React, { useEffect, useState, useRef } from "react";
import Nav from "./Nav";
import Search from "./search";
import coverDb from "./coverDb";

export default function One() {
  const [covers, setCovers] = useState(coverDb);
  const [c, setC] = useState(0);
  const vals = useRef(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      vals.current = vals.current + 1;
      setC(vals.current);

      // style = `{ backgroundImage: "url(${covers[vals.current]})" }`;
      if (vals.current >= covers.length - 1) {
        vals.current = 0;
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [c]);

  return (
    <div className="first" style={{ backgroundImage: `url(${covers[c]})` }}>
      <div className="firstd">
        <div className="firsts">
          <Nav />
          <Search />
        </div>
      </div>
    </div>
  );
}
