
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1, // 1 retry for local to handle occasional slider lag
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html'], ['list']], // 'list' reporter for better terminal visibility
  


  use: {
    /* Base URL */
    baseURL: 'https://emicalculator.net/',
    actionTimeout: 10000, // Wait up to 10s for clicks/drags
    /* providing visual evidence when test fails */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
*/
    /*  Cross-Device Test Cases  
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 13'] },
    },*/
  ],
});