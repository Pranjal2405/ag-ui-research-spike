🧪 Spike 001 – Evaluate AG-UI Protocol for Agentic UX
📌 Overview

This repository contains my research spike focused on evaluating AG-UI as a unified UI protocol for agent-based applications.

AG-UI is an event-based protocol designed to connect AI agents to frontends in a consistent way. Instead of building custom UI integrations for every framework, AG-UI aims to standardize how agents stream responses, trigger tools, and sync UI state.

The goal of this spike was to test how practical, usable, and flexible AG-UI is when integrating it with real agent frameworks.

🎯 Objective

The main objective of this spike was to test the hypothesis:

Using AG-UI as a middleware UX layer reduces custom integration effort across agent frameworks while still delivering responsive streaming and tool-based interactions.

To evaluate this, I:

Set up a minimal AG-UI demo application

Integrated the Mastra agent framework

Connected the agent to Groq LLM (llama-3.1-8b-instant)

Tested streaming, tool execution, and multi-turn conversations

Observed integration effort and runtime behavior

The broader goal was to compare multiple frameworks (Mastra, LangChain, CrewAI), starting with Mastra as the working prototype.

🏗 Architecture
Frontend (Next.js + CopilotKit)
        ↓
AG-UI Runtime Layer
        ↓
Mastra Agent Framework
        ↓
Groq LLM (llama-3.1-8b-instant)
        ↓
Custom Tools (Weather API, Student Form)


AG-UI acts as the communication layer between the frontend and the backend agent, handling:

Streaming responses

Tool invocation events

UI state updates

Multi-turn conversation handling

⚙️ Implementation Summary

In this spike, I successfully implemented:

✅ AG-UI frontend using official quickstart

✅ Mastra agent integration

✅ Groq LLM integration

✅ Weather tool (API-based)

✅ Student form filling tool

✅ Streaming backend responses to frontend

✅ Tool invocation via AG-UI event system

✅ Multi-turn interaction handling

The Mastra + AG-UI demo runs successfully and demonstrates core agentic UX behavior.

Attempts were also made to integrate CrewAI as a second framework for comparison, but that integration is still work in progress due to runtime and provider compatibility issues.

🔍 Findings

From implementation and testing:

AG-UI simplifies frontend-agent communication significantly.

Streaming works smoothly in local testing.

Tool invocation is clean and event-driven.

The protocol structure is flexible and framework-agnostic.

Integrating a new framework requires adapter logic and provider alignment.

Runtime version mismatches can cause unexpected errors.

LLM provider configuration must match runtime expectations.

Overall, AG-UI reduces frontend duplication effort, though backend adapters are still required per framework.

✅ Conclusion

AG-UI is a promising vendor-neutral UX protocol layer for agent-based applications.

This spike confirms that AG-UI can successfully handle:

Streaming responses

Tool execution

UI state synchronization

Multi-turn conversations

The Mastra integration validates the core hypothesis that AG-UI can act as a shared frontend layer.

🚀 Recommended Next Steps

Complete integration with a second framework (CrewAI or LangChain)

Create reusable adapter templates

Benchmark performance under load

Standardize provider configuration patterns
