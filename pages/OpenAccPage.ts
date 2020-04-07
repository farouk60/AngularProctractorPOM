import { browser, element, by, protractor } from "protractor";
import { alert } from "../util/alert"

export class OpenAccPage {
    Costomers = element(by.model('custId'));
    options = this.Costomers.all(by.tagName('option'));

    Currency = element(by.model('currency')); //$= by.css
    Process = element(by.xpath("//button[.='Process']"));

    SelectACustomer() {
        this.options.then(function (items) {
            for (let i = 0; i < items.length; i++) {
                items[i].getText().then(function (txt: any) {
                    if (txt == "ABC XYZ") {
                        items[i].click();
                    }
                })
            }

        })
    }
    SelectDollar() {
        this.Currency.$('[value="Dollar"]').click();
    }
    ClickProcessBtn() {
        this.Process.click();
        alert.VerefyAndCloseAlert("Account created");
    }
} 
