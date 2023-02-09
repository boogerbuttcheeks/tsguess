const { devices } = require("@playwright/test");

const config = {
  timeout: 30000,
  use: {
    ignoreHTTPSErrors: true,
  },

  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 }
      }
    },
    {
      name: 'Tablet Chrome',
      ...devices['iPad Air'],
      viewport: { width: 820, height: 1180 }
    },
    {
      name: 'Mobile Chrome',
      ...devices['iPhone XR'],
      viewport: { width: 414, height: 896 }
    }
  ]
}

module.exports = config
