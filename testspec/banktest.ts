import { browser, element, by } from "protractor";
import { protractor } from "protractor/built/ptor";

describe("Banking project Test", () =>{

    function VerefyAndCloseAlert(text: String){
        // To identefy popup and switch to it    
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 4000, "Alert not found");
        
        let alert = browser.switchTo().alert();
        let alertText = alert.getText();

        browser.sleep(2000);
        expect(alertText).toContain(text);
        alert.accept();
    }
    //
    beforeEach(() =>{
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust");
    })

    it("Verify the flow", () =>{
        element(by.model('fName')).sendKeys("ABC");
        element(by.model('lName')).sendKeys("XYZ");
        element(by.model('postCd')).sendKeys("1234");
        element(by.className('btn btn-default')).click();
        VerefyAndCloseAlert("Customer added");

    // second step cliking on open accout tab
        element(by.buttonText('Open Account')).click();
        let customers = element(by.model('custId'));
        let options = customers.all(by.tagName('option'));
        // search all entry and select by text (dynamic list who change every time)
        options.then(function(items){
            for(let i=0 ; i < items.length; i++){
                items[i].getText().then(function(txt: any){
                    if(txt == "ABC XYZ"){
                        items[i].click();
                    }
                })
            }

        })
        //select by css selector (static list who not change every time)
        element(by.model('currency')).$('[value="Dollar"]').click(); //$= by.css
        element(by.buttonText("Process")).click();
        VerefyAndCloseAlert("Account created");
        browser.sleep(4000);

        // Delete a customer
        element(by.buttonText('Customers')).click();
        // identify number of row
        let rows = element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
        browser.sleep(2000)

        rows.each(function(row: any){
            let cells = row.$$('td'); //all(by.css)
            cells.get(0).getText().then(function(txt: any){
                if(txt == 'ABC'){
                    cells.get(4).$('button').click();
                }

            })
        })

    })

})