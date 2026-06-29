import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 xl:px-10 xl:py-10 lg:px-5 lg:py-5">{children}</div>
  );
};

export default Wrapper;
