import type { ShortestConfig } from "@antiwork/shortest";

export default {
  headless: false,
  baseUrl: "http://localhost:3000",
  testPattern: '**/*.test.ts',
  ai: {
    provider: "anthropic",
    apiKey: process.env.ANTHROPIC_API_KEY
  }
} satisfies ShortestConfig;