"use client";

import React from "react";
import { CityProvider } from "@/context/CityContext";
import CitySelectorModal from "@/components/common/CitySelectorModal";

export default function CityProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CityProvider>
      {children}
      <CitySelectorModal />
    </CityProvider>
  );
}
