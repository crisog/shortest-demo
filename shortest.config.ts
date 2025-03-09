import type { ShortestConfig } from "@antiwork/shortest";

export default {
  headless: false,
  baseUrl: "http://localhost:3000",
  testFolder: '/tests',
  testPattern: '**/*.test.ts',
  ai: {
    provider: "anthropic",
  }
} satisfies ShortestConfig;