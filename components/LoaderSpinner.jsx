"use client";

import { InfinitySpin } from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <div className="hero min-h-screen bg-base-100 absolute top-0 left-0">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <InfinitySpin width="200" color="#1d4ed8" />
        </div>
      </div>
    </div>
  );
};

export default LoaderSpinner;
