import { browser, element, by, protractor } from "protractor";
import { alert } from "../util/alert"


 export class AddCustomerPage {
        prop = require("../testdata/prop")

        fname = element(by.model('fName'));
        lname = element(by.model('lName'));
        postalcode = element(by.model('postCd'));
        addcustomerbtn = element(by.className('btn btn-default'))

        //data
        firstname = this.prop.customers.firstName
        lastname = this.prop.customers.lastName
        postecode = this.prop.customers.postalCode

        AddCustomer(){
            this.fname.sendKeys(this.firstname);
            this.lname.sendKeys(this.lastname);
            this.postalcode.sendKeys(this.postecode);
            this.addcustomerbtn.click();

            alert.VerefyAndCloseAlert("Customer added");
        }

 }       
        
        
