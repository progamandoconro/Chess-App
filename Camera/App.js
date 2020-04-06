import React, {Fragment, useRef} from "react";
import { Camera } from 'react-cam';

function capture(imgSrc) {
  console.log(imgSrc);
}

const App = () => {
  const cam = useRef(null);
  return (
    <Fragment>
      <Camera
        showFocus={true}
        front={false}
        capture={capture}
        ref={cam}
        width="80%"
        height="auto"
        focusWidth="80%"
        focusHeight="60%"
        btnColor="white"
      />
      <button onClick={img => cam.current.capture(img)}>Take image</button>
    </Fragment>
  );
};

export default App
