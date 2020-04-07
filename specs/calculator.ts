import { browser, element, by } from "protractor";

describe("Calculator Test", () =>{
    beforeEach(() =>{
        browser.get("https://juliemr.github.io/protractor-demo/");
    })

    it("Launch url check", () =>{
        expect(browser.getTitle()).toContain("Super");
    })

    it("Add 2 numbers", () =>{
        element(by.model("first")).sendKeys("12");
        element(by.model("second")).sendKeys("13");
        element(by.id("gobutton")).click();
        let output =  element(by.cssContainingText('.ng-binding', '25'));
        expect<any>(output.getText()).toEqual('25');

    })
    
})