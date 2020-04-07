"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var alert_1 = require("../util/alert");
var AddCustomerPage = /** @class */ (function () {
    function AddCustomerPage() {
        this.fname = protractor_1.element(protractor_1.by.model('fName'));
        this.lname = protractor_1.element(protractor_1.by.model('lName'));
        this.postalcode = protractor_1.element(protractor_1.by.model('postCd'));
        this.addcustomerbtn = protractor_1.element(protractor_1.by.className('btn btn-default'));
    }
    AddCustomerPage.prototype.AddCustomer = function () {
        this.fname.sendKeys("ABC");
        this.lname.sendKeys("XYZ");
        this.postalcode.sendKeys("1234");
        this.addcustomerbtn.click();
        alert_1.alert.VerefyAndCloseAlert("Customer added");
    };
    return AddCustomerPage;
}());
exports.AddCustomerPage = AddCustomerPage;
