"use client";

import { cn } from "@/lib/utils";
import { Resource, ResourceType } from "@/lib/curriculum-data";
import { Check, Star, Flag, Trophy } from "lucide-react";

const typeConfig: Record<ResourceType, { 
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  bgColor: string;
  borderColor: string;
}> = {
  warmup: {
    icon: Star,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50/50",
    borderColor: "border-amber-200 hover:border-amber-300",
  },
  formative: {
    icon: Flag,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50/50",
    borderColor: "border-blue-200 hover:border-blue-300",
  },
  statetest: {
    icon: Trophy,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50/50",
    borderColor: "border-emerald-200 hover:border-emerald-300",
  },
};

interface ResourceCardProps {
  resource: Resource;
  className?: string;
}

export function ResourceCard({ resource, className }: ResourceCardProps) {
  const config = typeConfig[resource.type];
  const hasLink = !!resource.waygroundLink;
  const Icon = config.icon;

  const handleClick = () => {
    if (resource.waygroundLink) {
      window.open(resource.waygroundLink, "_blank");
    }
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "group relative p-4 rounded-xl border transition-all",
        hasLink ? "cursor-pointer hover:shadow-md" : "cursor-default opacity-60",
        config.bgColor,
        config.borderColor,
        className
      )}
    >
      {/* Link indicator dot */}
      {hasLink && (
        <div className="absolute top-4 right-4">
          <span className="flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
        </div>
      )}

      {/* Main content row */}
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0", config.iconBg)}>
          <Icon className={cn("w-6 h-6", config.iconColor)} />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-4">
            <h4 className="font-semibold text-base text-gray-900">
              {resource.label}
            </h4>
            <span className="text-[10px] font-medium text-gray-400 bg-white px-2 py-1 rounded border border-gray-200 flex-shrink-0">
              MCQ
            </span>
          </div>
          
          {/* Trust Markers - Below title */}
          <div className="flex items-center gap-4 mt-2">
            {resource.trustMarkers.slice(0, 3).map((marker, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 text-xs text-gray-500"
              >
                <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                {marker.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
