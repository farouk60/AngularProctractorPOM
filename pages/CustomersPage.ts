import { browser, element, by, protractor } from "protractor";
import { alert } from "../util/alert"

export class CustomersPage {
    rows = element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));

    VerifyCustEntryAndDel() {
        this.rows.each(function (row: any) {
            let cells = row.$$('td'); //all(by.css)
            cells.get(0).getText().then(function (txt: any) {
                if (txt == 'ABC') {
                    cells.get(4).$('button').click();
                }

            })
        })
    }

}