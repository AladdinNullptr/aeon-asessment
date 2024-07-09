"use client";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config";

import useMediaQuery from "./useMediaQuery";

const fullConfig = resolveConfig(tailwindConfig);

const useBreakpoint = (screen: "2xl" | "xl" | "lg" | "md" | "sm") =>
  useMediaQuery(`not all and (min-width: ${fullConfig.theme.screens[screen]})`);

export default useBreakpoint;
