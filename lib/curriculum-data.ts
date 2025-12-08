export interface Lesson {
  id: string;
  number: number;
  title: string;
}

export interface Topic {
  id: string;
  number: number;
  title: string;
  lessons: Lesson[];
}

export interface Module {
  id: string;
  number: number;
  title: string;
  topics: Topic[];
}

export interface Curriculum {
  id: string;
  name: string;
  grade: string;
  modules: Module[];
}

export const bluebonnetGrade6: Curriculum = {
  id: "bluebonnet-g6",
  name: "BlueBonnet Learning",
  grade: "Grade 6",
  modules: [
    {
      id: "m1",
      number: 1,
      title: "Composing and Decomposing",
      topics: [
        {
          id: "m1t1",
          number: 1,
          title: "Factors and Multiples",
          lessons: [
            { id: "m1t1l1", number: 1, title: "Writing Equivalent Expressions Using the Distributive Property" },
            { id: "m1t1l2", number: 2, title: "Identifying Common Factors and Common Multiples" },
            { id: "m1t1l3", number: 3, title: "Dividing a Whole into Fractional Parts" },
            { id: "m1t1l4", number: 4, title: "Benchmark Fractions" },
            { id: "m1t1l5", number: 5, title: "Multiplying Fractions" },
            { id: "m1t1l6", number: 6, title: "Fraction by Fraction Division" },
            { id: "m1t1l7", number: 7, title: "Factors and Multiples" },
          ],
        },
        {
          id: "m1t2",
          number: 2,
          title: "Shapes and Solids",
          lessons: [
            { id: "m1t2l1", number: 1, title: "Constructing Triangles Given Sides" },
            { id: "m1t2l2", number: 2, title: "Triangle Sum Theorem" },
            { id: "m1t2l3", number: 3, title: "Area of Triangles and Quadrilaterals" },
            { id: "m1t2l4", number: 4, title: "Volume of Rectangular Prisms" },
            { id: "m1t2l5", number: 5, title: "Shapes and Solids" },
          ],
        },
        {
          id: "m1t3",
          number: 3,
          title: "Decimals",
          lessons: [
            { id: "m1t3l1", number: 1, title: "Plotting, Comparing, and Ordering Rational Numbers" },
            { id: "m1t3l2", number: 2, title: "Multiplying Decimals" },
            { id: "m1t3l3", number: 3, title: "Dividing Decimals" },
            { id: "m1t3l4", number: 4, title: "Decimals" },
          ],
        },
      ],
    },
    {
      id: "m2",
      number: 2,
      title: "Relating Quantities",
      topics: [
        {
          id: "m2t1",
          number: 1,
          title: "Ratios and Rates",
          lessons: [
            { id: "m2t1l1", number: 1, title: "Introduction to Ratio and Ratio Reasoning" },
            { id: "m2t1l2", number: 2, title: "Comparing Ratios and Rates to Solve Problems" },
            { id: "m2t1l3", number: 3, title: "Determining Equivalent Ratios and Rates" },
            { id: "m2t1l4", number: 4, title: "Using Tables to Represent Equivalent Ratios and Rates" },
            { id: "m2t1l5", number: 5, title: "Graphs of Ratios and Rates" },
            { id: "m2t1l6", number: 6, title: "Using and Comparing Ratio and Rate Representations" },
            { id: "m2t1l7", number: 7, title: "Ratios and Rates" },
          ],
        },
        {
          id: "m2t2",
          number: 2,
          title: "Percents",
          lessons: [
            { id: "m2t2l1", number: 1, title: "Percent, Fraction, and Decimal Equivalence" },
            { id: "m2t2l2", number: 2, title: "Using Estimation and Benchmark Percents" },
            { id: "m2t2l3", number: 3, title: "Determining the Part and the Whole in Percent Problems" },
            { id: "m2t2l4", number: 4, title: "Percents" },
          ],
        },
        {
          id: "m2t3",
          number: 3,
          title: "Unit Rates and Conversions",
          lessons: [
            { id: "m2t3l1", number: 1, title: "Using Ratio Reasoning to Convert Units" },
            { id: "m2t3l2", number: 2, title: "Introduction to Unit Rates" },
            { id: "m2t3l3", number: 3, title: "Multiple Representations of Unit Rates" },
            { id: "m2t3l4", number: 4, title: "Unit Rates and Conversions" },
          ],
        },
      ],
    },
    {
      id: "m3",
      number: 3,
      title: "Moving Beyond Positive Quantities",
      topics: [
        {
          id: "m3t1",
          number: 1,
          title: "Signed Numbers and the Four Quadrants",
          lessons: [
            { id: "m3t1l1", number: 1, title: "Introduction to Negative Numbers" },
            { id: "m3t1l2", number: 2, title: "Absolute Value" },
            { id: "m3t1l3", number: 3, title: "Rational Number System" },
            { id: "m3t1l4", number: 4, title: "Extending the Coordinate Plane" },
            { id: "m3t1l5", number: 5, title: "Signed Numbers and the Four Quadrants" },
          ],
        },
        {
          id: "m3t2",
          number: 2,
          title: "Operating with Integers",
          lessons: [
            { id: "m3t2l1", number: 1, title: "Using Models to Understand Integer Addition" },
            { id: "m3t2l2", number: 2, title: "Adding Integers, Part I" },
            { id: "m3t2l3", number: 3, title: "Adding Integers, Part II" },
            { id: "m3t2l4", number: 4, title: "Subtracting Integers" },
            { id: "m3t2l5", number: 5, title: "Multiplying and Dividing Integers" },
            { id: "m3t2l6", number: 6, title: "Operating with Integers" },
          ],
        },
      ],
    },
    {
      id: "m4",
      number: 4,
      title: "Determining Unknown Quantities",
      topics: [
        {
          id: "m4t1",
          number: 1,
          title: "Expressions",
          lessons: [
            { id: "m4t1l1", number: 1, title: "Evaluating Numeric Expressions" },
            { id: "m4t1l2", number: 2, title: "Introduction to Algebraic Expressions" },
            { id: "m4t1l3", number: 3, title: "Equivalent Expressions" },
            { id: "m4t1l4", number: 4, title: "Verifying Equivalent Expressions" },
            { id: "m4t1l5", number: 5, title: "Expressions" },
          ],
        },
        {
          id: "m4t2",
          number: 2,
          title: "Equations and Inequalities",
          lessons: [
            { id: "m4t2l1", number: 1, title: "Reasoning with Equal Expressions" },
            { id: "m4t2l2", number: 2, title: "Solving One-Step Addition Equations" },
            { id: "m4t2l3", number: 3, title: "Solving One-Step Multiplication Equations" },
            { id: "m4t2l4", number: 4, title: "Solving Equations to Solve Problems" },
            { id: "m4t2l5", number: 5, title: "Solving Inequalities with Inverse Operations" },
            { id: "m4t2l6", number: 6, title: "Equations and Inequalities" },
          ],
        },
        {
          id: "m4t3",
          number: 3,
          title: "Graphing Quantitative Relationships",
          lessons: [
            { id: "m4t3l1", number: 1, title: "Independent and Dependent Variables" },
            { id: "m4t3l2", number: 2, title: "Using Graphs to Solve Problems" },
            { id: "m4t3l3", number: 3, title: "Multiple Representations of Equations" },
            { id: "m4t3l4", number: 4, title: "Relating Distance, Rate, and Time" },
            { id: "m4t3l5", number: 5, title: "Problem Solving on the Coordinate Plane" },
            { id: "m4t3l6", number: 6, title: "Graphing Quantitative Relationships" },
          ],
        },
        {
          id: "m4t4",
          number: 4,
          title: "Financial Literacy: Accounts, Credit, and Careers",
          lessons: [
            { id: "m4t4l1", number: 1, title: "Checking Accounts" },
            { id: "m4t4l2", number: 2, title: "Debit Cards vs. Credit Cards" },
            { id: "m4t4l3", number: 3, title: "Understanding Credit Reports" },
            { id: "m4t4l4", number: 4, title: "Career Exploration" },
            { id: "m4t4l5", number: 5, title: "Paying for College" },
            { id: "m4t4l6", number: 6, title: "Financial Literacy: Accounts, Credit, and Careers" },
          ],
        },
      ],
    },
    {
      id: "m5",
      number: 5,
      title: "Describing Variability of Quantities",
      topics: [
        {
          id: "m5t1",
          number: 1,
          title: "The Statistical Process",
          lessons: [
            { id: "m5t1l1", number: 1, title: "Understanding the Statistical Process" },
            { id: "m5t1l2", number: 2, title: "Analyzing Numerical Data Displays" },
            { id: "m5t1l3", number: 3, title: "Using Histograms to Display Data" },
            { id: "m5t1l4", number: 4, title: "The Statistical Process" },
          ],
        },
        {
          id: "m5t2",
          number: 2,
          title: "Numerical Summaries of Data",
          lessons: [
            { id: "m5t2l1", number: 1, title: "Analyzing Data Using Measures of Center" },
            { id: "m5t2l2", number: 2, title: "Displaying the Five-Number Summary" },
            { id: "m5t2l3", number: 3, title: "Collecting, Displaying, and Analyzing Data" },
            { id: "m5t2l4", number: 4, title: "Numerical Summaries of Data" },
          ],
        },
      ],
    },
  ],
};

export type ResourceType = "warmup" | "formative" | "statetest" | "hot";
export type ResourceLevel = "unit" | "topic" | "lesson";

export interface TrustMarker {
  icon: string;
  text: string;
}

export interface Resource {
  id: string;
  type: ResourceType;
  level: ResourceLevel;
  label: string;
  description: string;
  questionCount: number;
  timing: "before" | "after";
  trustMarkers: TrustMarker[];
  waygroundLink?: string;
}

// Map of resource IDs to Wayground links
export const waygroundLinks: Record<string, string> = {
  // Unit level
  "statetest-unit-Moving Beyond Positive Quantities": "https://wayground.com/admin/quiz/692fe2d8dd9f8343f447d2ef",
  "formative-unit-Moving Beyond Positive Quantities": "https://wayground.com/admin/quiz/693011901fbd94c1004464bb",
  "hot-unit-Moving Beyond Positive Quantities": "https://wayground.com/admin/quiz/69302b3c83579f0e7a57eab3",
  // Topic level - Warm-ups
  "warmup-topic-Operating with Integers": "https://wayground.com/admin/quiz/6931682592cd40ce00f60c8b",
  // Topic level - Formatives
  "formative-topic-Operating with Integers": "https://wayground.com/admin/quiz/692fe8f6caf2e0a0e4dbeb80",
  // Topic level - Higher Order Thinking
  "hot-topic-Operating with Integers": "https://wayground.com/admin/quiz/69302a945d90ba8e8c9c7953",
  // Lesson level - Warm-ups
  "warmup-lesson-Absolute Value": "https://wayground.com/admin/quiz/69316792e2c2f2350b628b4e",
  "warmup-lesson-Subtracting Integers": "https://wayground.com/admin/quiz/6931628e5d33fd3ef990d023",
  // Lesson level - Formatives
  "formative-lesson-Rational Number System": "https://wayground.com/admin/quiz/692fe60c55d19008e046a47b",
  // Lesson level - Higher Order Thinking
  "hot-lesson-Rational Number System": "https://wayground.com/admin/quiz/6930296553784969fab24eee",
};

// Resource configurations by level and type
const resourceConfig: Record<ResourceLevel, Record<ResourceType, { label: string; trustMarkers: TrustMarker[] }>> = {
  unit: {
    warmup: {
      label: "Foundational Knowledge Check",
      trustMarkers: [
        { icon: "clock", text: "Takes 5-10 mins" },
        { icon: "foundation", text: "Made from pre-requisite skills" },
        { icon: "brain", text: "Activate student memory" },
      ],
    },
    formative: {
      label: "Module Review",
      trustMarkers: [
        { icon: "clock", text: "Takes 20-25 mins" },
        { icon: "check", text: "Check for understanding" },
        { icon: "chart", text: "Identify gaps in learning" },
      ],
    },
    statetest: {
      label: "State Test Readiness",
      trustMarkers: [
        { icon: "clock", text: "Takes 30-40 mins" },
        { icon: "history", text: "Contains Qs from previous years" },
        { icon: "star", text: "STAAR 2.0 aligned question types" },
      ],
    },
    hot: {
      label: "Higher Order Thinking (Discussion-based)",
      trustMarkers: [
        { icon: "lightbulb", text: "Promotes critical thinking" },
        { icon: "users", text: "Discussion-based activity" },
        { icon: "brain", text: "Develops deeper understanding" },
      ],
    },
  },
  topic: {
    warmup: {
      label: "Warm-up",
      trustMarkers: [
        { icon: "clock", text: "Takes 5-10 mins" },
        { icon: "foundation", text: "Made from pre-requisite skills" },
        { icon: "brain", text: "Activate student memory" },
      ],
    },
    formative: {
      label: "Topic Review",
      trustMarkers: [
        { icon: "clock", text: "Takes 10-15 mins" },
        { icon: "check", text: "Check for understanding" },
        { icon: "chart", text: "Identify gaps in learning" },
      ],
    },
    statetest: {
      label: "STAAR Prep",
      trustMarkers: [
        { icon: "medal", text: "15-20 mins" },
        { icon: "star", text: "STAAR-aligned" },
        { icon: "graduation", text: "Test readiness" },
      ],
    },
    hot: {
      label: "Higher Order Thinking (Discussion-based)",
      trustMarkers: [
        { icon: "lightbulb", text: "Promotes critical thinking" },
        { icon: "users", text: "Discussion-based activity" },
        { icon: "brain", text: "Develops deeper understanding" },
      ],
    },
  },
  lesson: {
    warmup: {
      label: "Warm-up",
      trustMarkers: [
        { icon: "clock", text: "Takes 5-10 mins" },
        { icon: "foundation", text: "Made from pre-requisite skills" },
        { icon: "brain", text: "Activate student memory" },
      ],
    },
    formative: {
      label: "Extra Practice",
      trustMarkers: [
        { icon: "home", text: "Assign in class or as homework" },
        { icon: "repeat", text: "Focuses on repetition" },
        { icon: "levels", text: "Difficulty varies from easy to hard" },
      ],
    },
    statetest: {
      label: "STAAR Prep",
      trustMarkers: [
        { icon: "medal", text: "15-20 mins" },
        { icon: "star", text: "STAAR-aligned" },
        { icon: "graduation", text: "Test readiness" },
      ],
    },
    hot: {
      label: "Higher Order Thinking (Discussion-based)",
      trustMarkers: [
        { icon: "lightbulb", text: "Promotes critical thinking" },
        { icon: "users", text: "Discussion-based activity" },
        { icon: "brain", text: "Develops deeper understanding" },
      ],
    },
  },
};

// Helper to check if a topic has any linked resources
export function topicHasLinkedResources(topic: Topic): boolean {
  const topicResources = generateResources("topic", topic.title);
  if (topicResources.some(r => r.waygroundLink)) return true;
  
  for (const lesson of topic.lessons) {
    const lessonResources = generateResources("lesson", lesson.title);
    if (lessonResources.some(r => r.waygroundLink)) return true;
  }
  return false;
}

// Helper to check if a lesson has any linked resources
export function lessonHasLinkedResources(lessonTitle: string): boolean {
  const lessonResources = generateResources("lesson", lessonTitle);
  return lessonResources.some(r => r.waygroundLink);
}

export function generateResources(level: ResourceLevel, itemTitle: string): Resource[] {
  const resources: Resource[] = [];
  const config = resourceConfig[level];
  
  // Warm-up (before)
  const warmupId = `warmup-${level}-${itemTitle}`;
  resources.push({
    id: warmupId,
    type: "warmup",
    level,
    label: config.warmup.label,
    description: "Quick diagnostic to activate prior knowledge",
    questionCount: 5,
    timing: "before",
    trustMarkers: config.warmup.trustMarkers,
    waygroundLink: waygroundLinks[warmupId],
  });
  
  // Formative (after)
  const formativeId = `formative-${level}-${itemTitle}`;
  resources.push({
    id: formativeId,
    type: "formative",
    level,
    label: config.formative.label,
    description: "Assess mastery of key concepts",
    questionCount: 8,
    timing: "after",
    trustMarkers: config.formative.trustMarkers,
    waygroundLink: waygroundLinks[formativeId],
  });
  
  // State test (only for unit level)
  if (level === "unit") {
    const statetestId = `statetest-${level}-${itemTitle}`;
    resources.push({
      id: statetestId,
      type: "statetest",
      level,
      label: config.statetest.label,
      description: "Prepare students for state assessments",
      questionCount: 12,
      timing: "after",
      trustMarkers: config.statetest.trustMarkers,
      waygroundLink: waygroundLinks[statetestId],
    });
  }
  
  // Higher Order Thinking (Discussion-based) - after
  const hotId = `hot-${level}-${itemTitle}`;
  resources.push({
    id: hotId,
    type: "hot",
    level,
    label: config.hot.label,
    description: "Discussion-based activity to develop critical thinking",
    questionCount: 5,
    timing: "after",
    trustMarkers: config.hot.trustMarkers,
    waygroundLink: waygroundLinks[hotId],
  });
  
  return resources;
}
