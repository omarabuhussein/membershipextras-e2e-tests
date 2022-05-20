const E2E_SERVER_URL = getServerUrl();
const E2E_SERVER_PORT = getPort();

const portString = E2E_SERVER_PORT !== '80' ? `:${E2E_SERVER_PORT}` : '';
const baseURL = `http://${E2E_SERVER_URL}${portString}/`;

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: './tests',
  outputDir: './report',
  reporter: 'list',
  timeout: 40000,
  use: {
    baseURL,
    browserName: 'chromium',
    headless: true,
    viewport: { width: 1280, height: 720 },
    trace: 'retain-on-failure',
  },
};

module.exports = config;


/**
 * Get the server url.
 */
 function getServerUrl() {
  return process.env.E2E_SERVER_URL || 'localhost';
}

/**
 * Get the port number.
 */
 function getPort() {
  return process.env.E2E_SERVER_PORT || '8000';
}
