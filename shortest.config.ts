import type { ShortestConfig } from "@antiwork/shortest";

export default {
  headless: false,
  baseUrl: "http://localhost:3000",
  testFolder: 'dsa',
  testPattern: 'dasda',
  ai: {
    provider: "anthropic",
  }
} satisfies ShortestConfig;