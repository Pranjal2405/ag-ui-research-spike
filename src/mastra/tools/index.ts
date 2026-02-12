import { createTool } from "@mastra/core/tools";
import { z } from "zod";

/* =========================
   WEATHER TOOL
========================= */

export const weatherTool = createTool({
  id: "get-weather",
  description: "Get current weather for a city",
  inputSchema: z.object({
    location: z.string().describe("The city name to get weather for"),
  }),
  execute: async ({ location }) => {
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        location
      )}&count=1`
    );

    const geoData = await geoRes.json();
    if (!geoData.results?.[0]) {
      throw new Error("Location not found");
    }

    const { latitude, longitude, name } = geoData.results[0];

    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m`
    );

    const weatherData = await weatherRes.json();
    const current = weatherData.current;

    return {
      location: name,
      temperature: current.temperature_2m,
      feelsLike: current.apparent_temperature,
      humidity: current.relative_humidity_2m,
      windSpeed: current.wind_speed_10m,
    };
  },
});

/* =========================
   STUDENT FORM TOOL
========================= */

export const fillStudentFormTool = createTool({
  id: "fill-student-form",
  description: "Fill student information form",
  inputSchema: z.object({
    name: z.string().describe("Student's full name"),
    age: z.number().describe("Student's age"),
    branch: z.string().describe("Student's branch or course of study"),
  }),
  execute: async ({ name, age, branch }) => {
    return {
      name,
      age,
      branch,
    };
  },
});

/* =========================
   TODO TOOLS
========================= */

export const addTodoTool = createTool({
  id: "add-todo",
  description: "Add an item to the todo list.",
  inputSchema: z.object({
    item: z.string(),
  }),
  outputSchema: z.object({
    item: z.string(),
  }),
  execute: async ({ item }) => {
    return { item };
  },
});

export const removeTodoTool = createTool({
  id: "remove-todo",
  description: "Remove an item from the todo list.",
  inputSchema: z.object({
    item: z.string(),
  }),
  outputSchema: z.object({
    item: z.string(),
  }),
  execute: async ({ item }) => {
    return { item };
  },
});