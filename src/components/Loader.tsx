"use client";

import { FC } from "react";

const Loader: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-transparent border-b-transparent border-l-blue-500 border-r-purple-500"></div>
    </div>
  );
};

export default Loader;
