import React from "react";
function Loader() {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-primary z-[1000]">
      <div className="flex gap-5 text-6xl font-semibold">
        <div className="text-secondary k">L</div>
        <div className="text-white s">S</div>
        <div className="text-tertiary r">L</div>
      </div>
    </div>
  );
}
export default Loader;
