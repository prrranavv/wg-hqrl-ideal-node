"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { ContentArea } from "@/components/content-area";
import { bluebonnetGrade6 } from "@/lib/curriculum-data";

export default function Home() {
  // Start with Module 3 selected (Moving Beyond Positive Quantities)
  const [selectedModuleId, setSelectedModuleId] = useState("m3");

  const selectedModule = bluebonnetGrade6.modules.find(
    (m) => m.id === selectedModuleId
  );

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Top Bar with Wayground Logo - Full Width */}
      <div className="bg-white border-b border-gray-200 flex-shrink-0">
        <div className="py-4 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/wayground-logo.webp"
            alt="Wayground"
            className="h-8 object-contain"
          />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          curriculum={bluebonnetGrade6}
          selectedModuleId={selectedModuleId}
          onModuleSelect={setSelectedModuleId}
        />
        {selectedModule && <ContentArea module={selectedModule} />}
      </div>
    </div>
  );
}
