import {Config, browser, Capabilities } from "protractor";
import { callbackify } from "util";


export let config: Config = {
    framework : "jasmine",

    capabilities: {
        browserName : 'chrome'
    },

    specs:['./testspec/banktest.js'],

    seleniumAddress: 'http://localhost:4444/wd/hub',

    onPrepare:() =>{
        var os = require('os');
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(4000);
    }
}
