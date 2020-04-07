"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var BasePage = /** @class */ (function () {
    function BasePage() {
        this.openAccTab = protractor_1.element(protractor_1.by.buttonText('Open Account'));
        this.openCustTab = protractor_1.element(protractor_1.by.buttonText('Customers'));
    }
    BasePage.prototype.ClickOnOpenAccTab = function () {
        this.openAccTab.click();
    };
    BasePage.prototype.ClickOnCustTab = function () {
        this.openCustTab.click();
    };
    return BasePage;
}());
exports.BasePage = BasePage;
