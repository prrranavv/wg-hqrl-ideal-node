"use client";

import { cn } from "@/lib/utils";
import { Module, Topic, Lesson, generateResources, topicHasLinkedResources, lessonHasLinkedResources } from "@/lib/curriculum-data";
import { ResourceCard } from "./resource-card";
import { ChevronDown, Play } from "lucide-react";
import { useState } from "react";

interface ContentAreaProps {
  module: Module;
}

export function ContentArea({ module }: ContentAreaProps) {
  // Find first topic with linked resources for initial state
  const getInitialTopic = () => {
    const topic = module.topics.find(t => topicHasLinkedResources(t));
    return topic?.id || null;
  };

  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(getInitialTopic);

  const handleTopicClick = (topicId: string) => {
    console.log("Topic clicked:", topicId);
    setExpandedTopicId(current => current === topicId ? null : topicId);
  };

  const unitResources = generateResources("unit", module.title);
  const warmupResource = unitResources.find(r => r.type === "warmup");
  const formativeResource = unitResources.find(r => r.type === "formative");
  const staartestResource = unitResources.find(r => r.type === "statetest");

  return (
    <main className="flex-1 h-full overflow-y-auto bg-gray-100/50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-5">
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

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* 1. Before You Begin */}
        {warmupResource && (
          <section className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Before You Begin</h3>
            <ResourceCard resource={warmupResource} />
          </section>
        )}

        {/* 2. Topics */}
        <div className="space-y-4 mb-8">
          {module.topics.map((topic) => (
            <TopicSection
              key={topic.id}
              topic={topic}
              moduleNumber={module.number}
              isExpanded={expandedTopicId === topic.id}
              onToggle={() => handleTopicClick(topic.id)}
            />
          ))}
        </div>

        {/* 3. Module Review */}
        {(formativeResource || staartestResource) && (
          <section className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Module Review</h3>
            <div className="space-y-4">
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
  // Find first lesson with linked resources for initial state
  const getInitialLesson = () => {
    const lesson = topic.lessons.find(l => lessonHasLinkedResources(l.title));
    return lesson?.id || null;
  };

  const [expandedLessonId, setExpandedLessonId] = useState<string | null>(getInitialLesson);

  const handleLessonClick = (lessonId: string) => {
    console.log("Lesson clicked:", lessonId);
    setExpandedLessonId(current => current === lessonId ? null : lessonId);
  };

  const topicResources = generateResources("topic", topic.title);
  const warmupResource = topicResources.find(r => r.type === "warmup");
  const formativeResource = topicResources.find(r => r.type === "formative");
  const hasLinkedResources = topicHasLinkedResources(topic);

  return (
    <section className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      {/* Topic Header - Clickable */}
      <div
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={(e) => e.key === 'Enter' && onToggle()}
        className="w-full flex items-center gap-4 px-6 py-5 hover:bg-gray-50 transition-colors text-left cursor-pointer select-none"
      >
        <ChevronDown
          className={cn(
            "w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0",
            !isExpanded && "-rotate-90"
          )}
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
              Topic {moduleNumber}.{topic.number}
            </span>
            {hasLinkedResources && (
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
            )}
          </div>
          <h3 className="font-semibold text-gray-900 mt-0.5">{topic.title}</h3>
        </div>
      </div>

      {/* Topic Content */}
      {isExpanded && (
        <div className="border-t border-gray-100">
          {/* Topic Warm-up */}
          {warmupResource && (
            <div className="px-6 py-5 bg-amber-50/30">
              <ResourceCard resource={warmupResource} />
            </div>
          )}

          {/* Lessons */}
          <div className="px-6 py-5">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Lessons</h4>
            <div className="space-y-2">
              {topic.lessons.map((lesson) => (
                <LessonItem 
                  key={lesson.id} 
                  lesson={lesson} 
                  moduleNumber={moduleNumber}
                  topicNumber={topic.number}
                  isExpanded={expandedLessonId === lesson.id}
                  onToggle={() => handleLessonClick(lesson.id)}
                />
              ))}
            </div>
          </div>

          {/* Topic Review */}
          {formativeResource && (
            <div className="px-6 py-5 bg-blue-50/30 border-t border-gray-100">
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
  isExpanded: boolean;
  onToggle: () => void;
}

function LessonItem({ lesson, moduleNumber, topicNumber, isExpanded, onToggle }: LessonItemProps) {
  const hasLinkedResources = lessonHasLinkedResources(lesson.title);
  const lessonResources = generateResources("lesson", lesson.title);
  const warmupResource = lessonResources.find(r => r.type === "warmup");
  const formativeResource = lessonResources.find(r => r.type === "formative");

  return (
    <div className={cn(
      "rounded-xl border transition-all duration-200",
      isExpanded ? "border-gray-200 bg-gray-50" : "border-transparent hover:bg-gray-50"
    )}>
      {/* Lesson Header - Clickable */}
      <div
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={(e) => e.key === 'Enter' && onToggle()}
        className="w-full flex items-center gap-3 px-4 py-3 text-left cursor-pointer select-none"
      >
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors",
          isExpanded ? "bg-gray-200" : "bg-gray-100"
        )}>
          <Play className="w-3.5 h-3.5 text-gray-500" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium text-gray-400">
              Lesson {moduleNumber}.{topicNumber}.{lesson.number}
            </span>
            {hasLinkedResources && (
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            )}
          </div>
          <span className="text-sm font-medium text-gray-700">
            {lesson.title}
          </span>
        </div>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0",
            isExpanded && "rotate-180"
          )}
        />
      </div>
      
      {/* Lesson Resources */}
      {isExpanded && (
        <div className="px-4 pb-4 space-y-3">
          {warmupResource && <ResourceCard resource={warmupResource} compact />}
          {formativeResource && <ResourceCard resource={formativeResource} compact />}
        </div>
      )}
    </div>
  );
}
