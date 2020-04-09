"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var ptor_1 = require("protractor/built/ptor");
describe("Banking project Test", function () {
    function VerefyAndCloseAlert(text) {
        // To identefy popup and switch to it    
        var EC = ptor_1.protractor.ExpectedConditions;
        protractor_1.browser.wait(EC.alertIsPresent(), 4000, "Alert not found");
        var alert = protractor_1.browser.switchTo().alert();
        var alertText = alert.getText();
        protractor_1.browser.sleep(2000);
        expect(alertText).toContain(text);
        alert.accept();
    }
    //
    beforeEach(function () {
        protractor_1.browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust");
    });
    it("Verify the flow", function () {
        protractor_1.element(protractor_1.by.model('fName')).sendKeys("ABC");
        protractor_1.element(protractor_1.by.model('lName')).sendKeys("XYZ");
        protractor_1.element(protractor_1.by.model('postCd')).sendKeys("1234");
        protractor_1.element(protractor_1.by.className('btn btn-default')).click();
        VerefyAndCloseAlert("Customer added");
        // second step cliking on open accout tab
        protractor_1.element(protractor_1.by.buttonText('Open Account')).click();
        var customers = protractor_1.element(protractor_1.by.model('custId'));
        var options = customers.all(protractor_1.by.tagName('option'));
        // search all entry and select by text (dynamic list who change every time)
        options.then(function (items) {
            var _loop_1 = function (i) {
                items[i].getText().then(function (txt) {
                    if (txt == "ABC XYZ") {
                        items[i].click();
                    }
                });
            };
            for (var i = 0; i < items.length; i++) {
                _loop_1(i);
            }
        });
        //select by css selector (static list who not change every time)
        protractor_1.element(protractor_1.by.model('currency')).$('[value="Dollar"]').click(); //$= by.css
        protractor_1.element(protractor_1.by.buttonText("Process")).click();
        VerefyAndCloseAlert("Account created");
        protractor_1.browser.sleep(4000);
        // Delete a customer
        protractor_1.element(protractor_1.by.buttonText('Customers')).click();
        // identify number of row
        var rows = protractor_1.element.all(protractor_1.by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
        protractor_1.browser.sleep(2000);
        rows.each(function (row) {
            var cells = row.$$('td'); //all(by.css)
            cells.get(0).getText().then(function (txt) {
                if (txt == 'ABC') {
                    cells.get(4).$('button').click();
                }
            });
        });
    });
});
