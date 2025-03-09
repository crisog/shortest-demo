import type { ShortestConfig } from "@antiwork/shortest";

export default {
  headless: false,
  baseUrl: "http://localhost:3000",
  testFolder: 's',
  testPattern: 's',
  ai: {
    provider: "anthropic",
  }
} satisfies ShortestConfig;