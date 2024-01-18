import React from "react";
import Lottie from "lottie-react";
import lottie from "../assets/loading-animation.json";

export const Loading = () => <Lottie animationData={lottie} loop={true} style={{height:80, filter:'invert(0.5)', opacity:'.4', overflowY: "hidden"}} />;