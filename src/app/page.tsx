"use client";

import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Text } from '@mantine/core';

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <Text
          size="xl"
          fw={900}
          variant="gradient"
        >
          Gradient Text
        </Text>
      </main>
    </>
  );
}
