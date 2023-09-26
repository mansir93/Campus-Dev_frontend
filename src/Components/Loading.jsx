import React from "react";
import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-full flex justify-center items-center mt-8">
      <Circles
        height="80"
        width="80"
        color="#2196f3"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
