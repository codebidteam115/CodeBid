
import React from "react";
import "./style.css";

export const Group = ({ className }) => {
  return (
    <div className={`group ${className}`}>
      <div className="overlap-group">
        <div className="text-wrapper">Login</div>
      </div>

      <div className="overlap">
        <div className="div">Sign up</div>
      </div>

      <div className="div-wrapper">
        <div className="text-wrapper-2">Search</div>
      </div>

      <div className="overlap-2">
        <img
          className="map"
          alt="Map"
          src="https://c.animaapp.com/hh3qe6OI/img/map-1-1@2x.png"
        />

        <div className="text-wrapper-3">Explore</div>
      </div>

      <div className="text-wrapper-4">Wanderlust Canvas</div>
    </div>
  );
};
