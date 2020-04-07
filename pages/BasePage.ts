import { browser, element, by, protractor } from "protractor";
import { alert } from "../util/alert"

export class BasePage{
    openAccTab = element(by.buttonText('Open Account'));
    openCustTab = element(by.buttonText('Customers'));
    ClickOnOpenAccTab(){
        this.openAccTab.click();
    }
    ClickOnCustTab(){
        this.openCustTab.click();
    }

}