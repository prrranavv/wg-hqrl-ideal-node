"use client";

import { useState } from "react";

interface CurriculumLogoProps {
  size?: "sm" | "md";
  className?: string;
}

export function CurriculumLogo({ size = "md", className }: CurriculumLogoProps) {
  const [imageError, setImageError] = useState(false);
  
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
  };

  if (imageError) {
    return (
      <div className={`${sizeClasses[size]} rounded-lg bg-[#1a5f9e] flex items-center justify-center flex-shrink-0 ${className}`}>
        <span className="text-white font-bold text-lg">B</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/bluebonnet-logo.png"
      alt="BlueBonnet Learning"
      className={`${sizeClasses[size]} rounded-lg object-contain flex-shrink-0 bg-white ${className}`}
      onError={() => setImageError(true)}
    />
  );
}

