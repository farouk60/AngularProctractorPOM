import { Config, browser, Capabilities } from "protractor";
import { callbackify } from "util";

var HtmlReporter = require('protractor-beautiful-reporter');

export let config: Config = {
    framework: "jasmine",
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['./specs/banktestPOM.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    onPrepare: () => {
        
        var os = require('os');
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(4000);
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'tmp/screenshots',
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            docTitle: 'Mon Rapport de Test',
            takeScreenShotsOnlyForFailedSpecs: true
         }).getJasmine2Reporter());
      }

}
