"use client";

import { cn } from "@/lib/utils";
import { Module, Topic, Lesson, generateResources, topicHasLinkedResources, lessonHasLinkedResources } from "@/lib/curriculum-data";
import { ResourceCard } from "./resource-card";
import {
  ChevronDown,
  Play,
  Star,
  Flag,
} from "lucide-react";
import { useState, useMemo } from "react";

interface ContentAreaProps {
  module: Module;
}

export function ContentArea({ module }: ContentAreaProps) {
  // Only expand topics that have linked resources
  const initialExpandedTopics = useMemo(() => {
    const expanded = new Set<string>();
    module.topics.forEach(topic => {
      if (topicHasLinkedResources(topic)) {
        expanded.add(topic.id);
      }
    });
    return expanded;
  }, [module.topics]);

  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(initialExpandedTopics);

  const toggleTopic = (topicId: string) => {
    setExpandedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(topicId)) {
        next.delete(topicId);
      } else {
        next.add(topicId);
      }
      return next;
    });
  };

  const unitResources = generateResources("unit", module.title);
  const warmupResource = unitResources.find(r => r.type === "warmup");
  const formativeResource = unitResources.find(r => r.type === "formative");
  const staartestResource = unitResources.find(r => r.type === "statetest");

  return (
    <main className="flex-1 h-full overflow-y-auto bg-gray-50/50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-5">
            {/* BlueBonnet Logo */}
            <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white border border-gray-200 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/bluebonnet-logo.png"
                alt="BlueBonnet Learning"
                className="w-full h-full object-cover scale-100"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Module {module.number}: {module.title}
              </h1>
              <p className="text-sm text-gray-500 mt-1">BlueBonnet Learning • Grade 6</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-6">
        {/* 1. Before You Begin - Just the warm-up */}
        {warmupResource && (
          <section className="bg-white rounded-2xl border border-gray-200 p-5 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center">
                <Star className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Before You Begin</h3>
            </div>
            <ResourceCard resource={warmupResource} />
          </section>
        )}

        {/* 2. Topics - Sequential after warm-up */}
        <div className="space-y-4 mb-6">
          {module.topics.map((topic) => (
            <TopicSection
              key={topic.id}
              topic={topic}
              moduleNumber={module.number}
              isExpanded={expandedTopics.has(topic.id)}
              onToggle={() => toggleTopic(topic.id)}
            />
          ))}
        </div>

        {/* 3. Module Review - Contains Formative and STAAR Prep */}
        {(formativeResource || staartestResource) && (
          <section className="bg-white rounded-xl border border-gray-200 p-5 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <Flag className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Module Review</h3>
            </div>
            <div className="space-y-3">
              {formativeResource && <ResourceCard resource={formativeResource} />}
              {staartestResource && <ResourceCard resource={staartestResource} />}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

interface TopicSectionProps {
  topic: Topic;
  moduleNumber: number;
  isExpanded: boolean;
  onToggle: () => void;
}

function TopicSection({ topic, moduleNumber, isExpanded, onToggle }: TopicSectionProps) {
  const topicResources = generateResources("topic", topic.title);
  const warmupResource = topicResources.find(r => r.type === "warmup");
  const formativeResource = topicResources.find(r => r.type === "formative");
  const hasLinkedResources = topicHasLinkedResources(topic);

  return (
    <section className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Topic Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition-colors text-left"
      >
        <ChevronDown
          className={cn(
            "w-5 h-5 text-gray-400 transition-transform flex-shrink-0",
            !isExpanded && "-rotate-90"
          )}
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">
              Topic {moduleNumber}.{topic.number}
            </span>
            {hasLinkedResources && (
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
            )}
          </div>
          <h3 className="font-semibold text-gray-900">{topic.title}</h3>
        </div>
      </button>

      {/* Topic Content */}
      {isExpanded && (
        <div className="px-5 pb-5 border-t border-gray-100">
          {/* Warm-up first */}
          {warmupResource && (
            <div className="mt-4">
              <ResourceCard resource={warmupResource} />
            </div>
          )}

          {/* Lessons */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Lessons</h4>
            <div className="space-y-1">
              {topic.lessons.map((lesson) => (
                <LessonItem 
                  key={lesson.id} 
                  lesson={lesson} 
                  moduleNumber={moduleNumber}
                  topicNumber={topic.number} 
                />
              ))}
            </div>
          </div>

          {/* Formative Review at the end */}
          {formativeResource && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <ResourceCard resource={formativeResource} />
            </div>
          )}
        </div>
      )}
    </section>
  );
}

interface LessonItemProps {
  lesson: Lesson;
  moduleNumber: number;
  topicNumber: number;
}

function LessonItem({ lesson, moduleNumber, topicNumber }: LessonItemProps) {
  const hasLinkedResources = lessonHasLinkedResources(lesson.title);
  const [showResources, setShowResources] = useState(hasLinkedResources);
  const lessonResources = generateResources("lesson", lesson.title);
  const warmupResource = lessonResources.find(r => r.type === "warmup");
  const formativeResource = lessonResources.find(r => r.type === "formative");

  return (
    <div className="rounded-lg overflow-hidden">
      <button
        onClick={() => setShowResources(!showResources)}
        className={cn(
          "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-left group",
          showResources ? "bg-gray-100" : "hover:bg-gray-50"
        )}
      >
        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-300 transition-colors">
          <Play className="w-3 h-3 text-gray-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-gray-400">
              Lesson {moduleNumber}.{topicNumber}.{lesson.number}
            </span>
            {hasLinkedResources && (
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            )}
          </div>
          <span className="text-sm text-gray-700 group-hover:text-gray-900">
            {lesson.title}
          </span>
        </div>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-gray-400 transition-transform",
            showResources && "rotate-180"
          )}
        />
      </button>
      
      {showResources && (
        <div className="px-3 pb-3 pt-2 bg-gray-50 rounded-b-lg -mt-1">
          <div className="space-y-3">
            {warmupResource && <ResourceCard resource={warmupResource} />}
            {formativeResource && <ResourceCard resource={formativeResource} />}
          </div>
        </div>
      )}
    </div>
  );
}
