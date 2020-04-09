import { browser, element, by, protractor } from "protractor";
import { alert } from "../util/alert"

export class CustomersPage {
    prop = require("../testdata/prop")

    rows = element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
    firstname = this.prop.customers.firstName

    VerifyCustEntryAndDel() {
        let firstName = this.firstname
        this.rows.each(function (row: any) {
            let cells = row.$$('td'); //all(by.css)
            cells.get(0).getText().then(function (txt: any) {
                if (txt == firstName) {
                    cells.get(4).$('button').click();
                }
            })
        })
    }

}