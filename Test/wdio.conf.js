
  exports.config = {
    services: ['appium'],
    port: 4723,
    runner: 'local',
    specs: [
      './test/specs/*.js'
    ],
    capabilities: [{
       maxInstances: 1,
       browserName: '',
       appiumVersion: '1.13.0',
       platformName: 'Android',
       platformVersion: '9',
       deviceName: 'Copy_Pixel 3 API 28',
       app: 'C:/Users/LaviniaS/appium/Test/android/app/build/outputs/apk/debug/app-debug.apk',
       path: '/wd/hub',
       baseUrl: 'http://127.0.0.1:4723/',
       automationName: 'UiAutomator2'
    }],
   
    logLevel: 'trace',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
    }
  }