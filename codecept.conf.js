const http = require('http')
const { setHeadlessWhen } = require('@codeceptjs/configure')
const { devices } = require('playwright')
const handler = require('serve-handler')

const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options
  return handler(request, response, { public: 'dist' })
})

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(true)

exports.config = {
  tests: './tests/e2e/*_test.js',
  output: './tests/e2e/screenshots/base/',
  helpers: {
    Playwright: {
      url: 'http://localhost:3001',
      show: true,
      waitForNavigation: 'networkidle0',
      emulate: devices['iPhone 7'],
    },
    ResembleHelper: {
      require: 'codeceptjs-resemblehelper',
      baseFolder: './tests/e2e/screenshots/base/',
      diffFolder: './tests/e2e/screenshots/diff/',
      prepareBaseImage: true,
    },
  },
  bootstrap() {
    server.listen(3001, () => {})
  },
  teardown() {
    server.close()
  },
  mocha: {},
  name: 'ca-editor',
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: false,
    },
  },
}
