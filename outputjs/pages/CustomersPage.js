"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var CustomersPage = /** @class */ (function () {
    function CustomersPage() {
        this.rows = protractor_1.element.all(protractor_1.by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
    }
    CustomersPage.prototype.VerifyCustEntryAndDel = function () {
        this.rows.each(function (row) {
            var cells = row.$$('td'); //all(by.css)
            cells.get(0).getText().then(function (txt) {
                if (txt == 'ABC') {
                    cells.get(4).$('button').click();
                }
            });
        });
    };
    return CustomersPage;
}());
exports.CustomersPage = CustomersPage;
