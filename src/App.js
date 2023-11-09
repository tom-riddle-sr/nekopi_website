import Loading from "./pre_loading/Loading";
import P1 from "./10_p1/P1";
import P2 from "./20_P2/P2"
import P3 from "./30_P3/P3"
import P4 from "./40_P4/P4"
import P5 from "./50_P5/P5"
import P6 from "./60_P6/P6"
import P7 from "./70_P7/P7"
import "./reset.css"
import "./App.css"
import { useEffect, useState } from "react";

function App() {
  const [loading_switch, setLoading_switch] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      setLoading_switch(false);
    }, 2500);
  }, []);

  return (
    <div className="App">

      {loading_switch ? <Loading /> :
        <> <P1 />
          <P2 />
          <P3 />
          <P4 />
          <P5 />
          <P6 />
          <P7 /> </>}

    </div>
  );
}

export default App;
