"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var alert_1 = require("../util/alert");
var AddCustomerPage = /** @class */ (function () {
    function AddCustomerPage() {
        this.prop = require("../testdata/prop");
        this.fname = protractor_1.element(protractor_1.by.model('fName'));
        this.lname = protractor_1.element(protractor_1.by.model('lName'));
        this.postalcode = protractor_1.element(protractor_1.by.model('postCd'));
        this.addcustomerbtn = protractor_1.element(protractor_1.by.className('btn btn-default'));
        //data
        this.firstname = this.prop.customers.firstName;
        this.lastname = this.prop.customers.lastName;
        this.postecode = this.prop.customers.postalCode;
    }
    AddCustomerPage.prototype.AddCustomer = function () {
        this.fname.sendKeys(this.firstname);
        this.lname.sendKeys(this.lastname);
        this.postalcode.sendKeys(this.postecode);
        this.addcustomerbtn.click();
        alert_1.alert.VerefyAndCloseAlert("Customer 2added");
    };
    return AddCustomerPage;
}());
exports.AddCustomerPage = AddCustomerPage;
