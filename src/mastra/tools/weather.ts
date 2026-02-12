import { z } from "zod";

export const weatherTool = {
  name: "getWeather",
  description: "Get weather for a city",
  schema: z.object({
    city: z.string(),
  }),
  execute: async ({ city }: { city: string }) => {
    const res = await fetch(`https://wttr.in/${city}?format=j1`);
    const data = await res.json();

    return {
      temperature: data.current_condition[0].temp_C,
      description: data.current_condition[0].weatherDesc[0].value,
    };
  },
};
