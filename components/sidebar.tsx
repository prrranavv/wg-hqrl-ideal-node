"use client";

import { cn } from "@/lib/utils";
import { Module, Curriculum } from "@/lib/curriculum-data";
import { ChevronRight } from "lucide-react";

interface SidebarProps {
  curriculum: Curriculum;
  selectedModuleId: string;
  onModuleSelect: (moduleId: string) => void;
}

export function Sidebar({ curriculum, selectedModuleId, onModuleSelect }: SidebarProps) {
  return (
    <aside className="w-64 h-full bg-gray-50 border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          {/* BlueBonnet Logo */}
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-white border border-gray-200 flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/bluebonnet-logo.png"
              alt="BlueBonnet Learning"
              className="w-full h-full object-cover scale-100"
            />
          </div>
          <div>
            <h1 className="font-semibold text-sm text-gray-900">{curriculum.name}</h1>
            <p className="text-xs text-gray-500">{curriculum.grade}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-2">
        <ul className="space-y-0.5 px-2">
          {curriculum.modules.map((module) => (
            <ModuleItem
              key={module.id}
              module={module}
              isSelected={selectedModuleId === module.id}
              onSelect={() => onModuleSelect(module.id)}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

interface ModuleItemProps {
  module: Module;
  isSelected: boolean;
  onSelect: () => void;
}

function ModuleItem({ module, isSelected, onSelect }: ModuleItemProps) {
  return (
    <li>
      <button
        onClick={onSelect}
        className={cn(
          "w-full text-left px-3 py-2 rounded-md transition-colors text-sm",
          isSelected
            ? "bg-white border border-gray-200 shadow-sm font-medium text-gray-900"
            : "hover:bg-gray-100 text-gray-600"
        )}
      >
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 w-4">M{module.number}</span>
          <span className="flex-1 truncate">{module.title}</span>
          {isSelected && <ChevronRight className="w-4 h-4 text-gray-400" />}
        </div>
      </button>
    </li>
  );
}
