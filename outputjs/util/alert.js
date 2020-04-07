"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var alert = /** @class */ (function () {
    function alert() {
    }
    alert.VerefyAndCloseAlert = function (text) {
        // To identefy popup and switch to it    
        var EC = protractor_1.protractor.ExpectedConditions;
        protractor_1.browser.wait(EC.alertIsPresent(), 4000, "Alert not found");
        var alert = protractor_1.browser.switchTo().alert();
        var alertText = alert.getText();
        expect(alertText).toContain(text);
        alert.accept();
    };
    return alert;
}());
exports.alert = alert;
