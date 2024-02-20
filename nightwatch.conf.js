module.exports = {
    src_folders: ['tests'],
    page_objects_path: ['page-objects'],

    selenium: {
      start_process: true,
      server_path: require('selenium-server').path,
      host: '127.0.0.1',
      port: 4444,
      cli_args: {
        'webdriver.chrome.driver': require('chromedriver').path
      }
    },
  
    test_settings: {
      default: {
        desiredCapabilities: {
          browserName: 'chrome',
          acceptSslCerts: true
        }
      }
    }
  };