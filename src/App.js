import "./styles.css";
import React from "react";
import { config } from "./config";

const Root = (props) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    ref.current.model = config;
  }, []);

  return (
    <div>
      <div style={{ width: 550, height: 350 }}>
        <arcgis-chart ref={ref} />
      </div>
    </div>
  );
};

export default Root;
