import React, { Fragment } from "react";
import useProgressiveImg from "./useProgressiveImg";

function App() {
  const BlurredUpImage = () => {
    const [src, { blur }] = useProgressiveImg(
      "/img-lq.jpg",
      "/img-hq.jpg"
    );
    return (
      <Fragment>
        <img
            alt="cool"
            src={src}
            style={{
              width: '100%',
              filter: blur ? "blur(20px)" : "none",
              transition: blur ? "none" : "filter 0.6s ease-out",
            }}
          />

      </Fragment>
    );
  };
  return (
    <div className="App">
      <BlurredUpImage />
    </div>
  );
}

export default App;
