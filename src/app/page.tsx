"use client";

import React, { useContext } from "react";

import Home from "@/components/Home";
import Startup from "@/components/Startup";

import { StartupContext } from "@/providers/StartupProvider";

export default function Main() {
  const { bootStatus, bootUp } = useContext(StartupContext);

  if (bootStatus === "booted") {
    return <Home />;
  } else {
    return <Startup status={bootStatus} bootUp={bootUp} />;
  }
}

export const runtime = "edge";
