import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '7hmi4y',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false,
  },
  video: false,
});
