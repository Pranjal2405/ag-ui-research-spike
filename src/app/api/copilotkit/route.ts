import {
  CopilotRuntime,
  GroqAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { MastraAgent } from "@ag-ui/mastra";
import { NextRequest } from "next/server";
import { mastra } from "@/mastra";

const serviceAdapter = new GroqAdapter({
  model: "llama-3.1-8b-instant",
});

export const POST = async (req: NextRequest) => {
  const runtime = new CopilotRuntime({
    agents: MastraAgent.getLocalAgents({ 
      mastra,
      resourceId: "weather-app" // Add this
    }),
  });

  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter,
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
};