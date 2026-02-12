import { groq } from "@ai-sdk/groq";
import { Agent } from "@mastra/core/agent";
import {
  weatherTool,
  fillStudentFormTool,
} from "../tools";

export const weatherAgent = new Agent({
  id: "weatherAgent",  // Must match the agent name in layout.tsx
  name: "Weather Agent",
  model: groq("llama-3.1-8b-instant"),
  tools: {
    "get-weather": weatherTool,
    "fill-student-form": fillStudentFormTool,
  },
  instructions: `You are a helpful assistant that can:
    - Get current weather information for any city using the get-weather tool
    - Fill student information forms using the fill-student-form tool
    
    When asked about weather, call the get-weather tool with the city name.
    When asked to fill a student form, call the fill-student-form tool with name, age, and branch.
    
    Always respond after calling the tools with the results.`,
});