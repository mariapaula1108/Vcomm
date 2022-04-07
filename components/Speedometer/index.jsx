import React from "react";
import "./Speedometer.css";

function Speedometer(props) {
  const { group351, path9205, path9206, className } = props;

  return (
    <div className={`speedometer ${className || ""}`}>
      <div className="dashboard-svgrepo-com">
        <div className="group-352">
          <div className="group-351" style={{ backgroundImage: `url(${group351})` }}>
            <img className="path-9205" src={path9205} />
            <img className="path-9206" src={path9206} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speedometer;
