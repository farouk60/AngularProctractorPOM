"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var alert_1 = require("../util/alert");
var OpenAccPage = /** @class */ (function () {
    function OpenAccPage() {
        this.prop = require("../testdata/prop");
        this.Costomers = protractor_1.element(protractor_1.by.model('custId'));
        this.options = this.Costomers.all(protractor_1.by.tagName('option'));
        this.Currency = protractor_1.element(protractor_1.by.model('currency')); //$= by.css
        this.Process = protractor_1.element(protractor_1.by.xpath("//button[.='Process']"));
        this.fullName = this.prop.customers.firstName + " " + this.prop.customers.lastName;
    }
    OpenAccPage.prototype.SelectACustomer = function () {
        var fullName = this.fullName;
        this.options.then(function (items) {
            var _loop_1 = function (i) {
                items[i].getText().then(function (txt) {
                    if (txt == fullName) {
                        items[i].click();
                    }
                });
            };
            for (var i = 0; i < items.length; i++) {
                _loop_1(i);
            }
        });
    };
    OpenAccPage.prototype.SelectDollar = function () {
        this.Currency.$('[value="Dollar"]').click();
    };
    OpenAccPage.prototype.ClickProcessBtn = function () {
        this.Process.click();
        alert_1.alert.VerefyAndCloseAlert("Account created");
    };
    return OpenAccPage;
}());
exports.OpenAccPage = OpenAccPage;
