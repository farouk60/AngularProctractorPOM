"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
exports.config = {
    framework: "jasmine",
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['./testspec/banktestPOM.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    onPrepare: function () {
        var os = require('os');
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.manage().timeouts().implicitlyWait(4000);
    }
};
