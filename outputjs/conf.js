"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    framework: "jasmine",
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['./specs/banktestPOM.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    onPrepare: function () {
        var os = require('os');
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.manage().timeouts().implicitlyWait(4000);
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'tmp/screenshots',
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            docTitle: 'Mon Rapport de Test',
            takeScreenShotsOnlyForFailedSpecs: true
        }).getJasmine2Reporter());
    }
};
