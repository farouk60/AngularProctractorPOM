"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var AddCustomerPage_1 = require("../pages/AddCustomerPage");
var BasePage_1 = require("../pages/BasePage");
var OpenAccPage_1 = require("../pages/OpenAccPage");
var CustomersPage_1 = require("../pages/CustomersPage");
describe("Banking project Test", function () {
    var prop = require("../testdata/prop");
    beforeEach(function () {
        protractor_1.browser.get(prop.siteUrl);
    });
    it("Verify the flow", function () {
        var addcustpage = new AddCustomerPage_1.AddCustomerPage();
        addcustpage.AddCustomer();
        new BasePage_1.BasePage().ClickOnOpenAccTab();
        var openaccpage = new OpenAccPage_1.OpenAccPage();
        openaccpage.SelectACustomer();
        openaccpage.SelectDollar();
        openaccpage.ClickProcessBtn();
        new BasePage_1.BasePage().ClickOnCustTab();
        new CustomersPage_1.CustomersPage().VerifyCustEntryAndDel();
    });
});
