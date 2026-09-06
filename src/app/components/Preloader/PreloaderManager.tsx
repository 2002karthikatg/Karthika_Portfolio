"use client";

import React, {
  useEffect,
  useState,
} from "react";

import Preloader from "./Preloader";
import PreloaderDownloaded from "./PreloaderDownloaded";

/**
 * Choose which preloader to use.
 *
 *   true  -> Downloadable preloader (circles.svg spinner)
 *   false -> Custom Karthiyayini preloader (logo + progress bar)
 *
 * You can switch to decide which you like best.
 */
const USE_DOWNLOADED_PRELOADER =
  true;

function PreloaderManager() {
  const [loading, setLoading] =
    useState(true);

  const [showDownloaded, setShowDownloaded] =
    useState(USE_DOWNLOADED_PRELOADER);

  /* =========================================================
     HIDE LOADED PRELOADER
  ========================================================= */

  const handleComplete = () => {
    setLoading(false);
  };

  /* =========================================================
     DOWNLOADED PRELOADER LIFECYCLE
  =========================================================
     The downloaded preloader relies on a `load` boolean.
     Keep it visible on mount, then hide after ~2.5s.
  ========================================================= */

  useEffect(() => {
    if (!showDownloaded) {
      return;
    }

    const timer = window.setTimeout(
      () => {
        setLoading(false);
      },
      2500
    );

    return () => {
      window.clearTimeout(timer);
    };
  }, [showDownloaded]);

  /* =========================================================
     SWITCH BETWEEN PRELOADERS
  ========================================================= */

  useEffect(() => {
    setShowDownloaded(USE_DOWNLOADED_PRELOADER);
  }, []);

    /* =========================================================
     RENDER
  =========================================================
     Keep the downloaded preloader mounted so it can use
     the `load` boolean (switching #preloader -> #preloader-none
     for a smooth fade-out). The custom preloader self-manages
     its own progress and calls onComplete when finished.
  ========================================================= */

  if (showDownloaded) {
    return <PreloaderDownloaded load={loading} />;
  }

  if (loading) {
    return <Preloader onComplete={handleComplete} />;
  }

  return null;
}

export default PreloaderManager;
