import { browser, element, by, protractor } from "protractor";
import { alert } from "../util/alert"

 export class AddCustomerPage {
        fname = element(by.model('fName'));
        lname = element(by.model('lName'));
        postalcode = element(by.model('postCd'));
        addcustomerbtn = element(by.className('btn btn-default'))

        AddCustomer(){
            this.fname.sendKeys("ABC");
            this.lname.sendKeys("XYZ");
            this.postalcode.sendKeys("1234");
            this.addcustomerbtn.click();

            alert.VerefyAndCloseAlert("Customer added");
        }

 }       
        
        
