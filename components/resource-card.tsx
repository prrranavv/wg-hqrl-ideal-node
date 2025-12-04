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
    iconBg: "bg-amber-500",
    iconColor: "text-white",
    bgColor: "bg-white",
    borderColor: "border-amber-200 hover:border-amber-400",
  },
  formative: {
    icon: Flag,
    iconBg: "bg-blue-500",
    iconColor: "text-white",
    bgColor: "bg-white",
    borderColor: "border-blue-200 hover:border-blue-400",
  },
  statetest: {
    icon: Trophy,
    iconBg: "bg-emerald-500",
    iconColor: "text-white",
    bgColor: "bg-white",
    borderColor: "border-emerald-200 hover:border-emerald-400",
  },
};

interface ResourceCardProps {
  resource: Resource;
  compact?: boolean;
  className?: string;
}

export function ResourceCard({ resource, compact, className }: ResourceCardProps) {
  const config = typeConfig[resource.type];
  const hasLink = !!resource.waygroundLink;
  const Icon = config.icon;

  const handleClick = () => {
    if (resource.waygroundLink) {
      window.open(resource.waygroundLink, "_blank");
    }
  };

  if (compact) {
    return (
      <div
        onClick={handleClick}
        className={cn(
          "group relative flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-all",
          hasLink ? "cursor-pointer hover:shadow-sm" : "cursor-default opacity-50",
          config.bgColor,
          config.borderColor,
          className
        )}
      >
        {hasLink && (
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500"></span>
        )}
        <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0", config.iconBg)}>
          <Icon className={cn("w-4 h-4", config.iconColor)} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-sm text-gray-900">{resource.label}</h4>
          <p className="text-xs text-gray-400 truncate">
            {resource.trustMarkers[0]?.text}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={handleClick}
      className={cn(
        "group relative p-4 rounded-xl border-2 transition-all shadow-sm",
        hasLink ? "cursor-pointer hover:shadow-md hover:scale-[1.01]" : "cursor-default opacity-50",
        config.bgColor,
        config.borderColor,
        className
      )}
    >
      {/* Link indicator dot */}
      {hasLink && (
        <div className="absolute top-3 right-3">
          <span className="flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
        </div>
      )}

      {/* Main content row */}
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm", config.iconBg)}>
          <Icon className={cn("w-5 h-5", config.iconColor)} />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-4">
            <h4 className="font-semibold text-[15px] text-gray-900">
              {resource.label}
            </h4>
            <span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded flex-shrink-0">
              MCQ
            </span>
          </div>
          
          {/* Trust Markers */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5">
            {resource.trustMarkers.slice(0, 3).map((marker, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 text-[11px] text-gray-500"
              >
                <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                {marker.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
