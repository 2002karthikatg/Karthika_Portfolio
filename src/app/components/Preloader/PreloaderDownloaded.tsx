import React from "react";

import "./PreloaderDownloaded.css";

function PreloaderDownloaded({ load }: { load: boolean }) {
  return (
    <div
      id={load ? "preloader" : "preloader-none"}
      aria-hidden="true"
    />
  );
}

export default PreloaderDownloaded;
