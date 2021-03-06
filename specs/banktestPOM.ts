import { browser, element, by } from "protractor";
import { protractor } from "protractor/built/ptor";
import { AddCustomerPage } from "../pages/AddCustomerPage";
import { BasePage } from "../pages/BasePage";
import { OpenAccPage } from "../pages/OpenAccPage";
import { CustomersPage } from "../pages/CustomersPage";

describe("Banking project Test", () => {
    let prop = require("../testdata/prop")

    beforeEach(() => {
        browser.get(prop.siteUrl);
    })

    it("Verify the flow", () => {
        let addcustpage = new AddCustomerPage();
        addcustpage.AddCustomer();

        new BasePage().ClickOnOpenAccTab();
        let openaccpage = new OpenAccPage();
        openaccpage.SelectACustomer();
        openaccpage.SelectDollar();
        openaccpage.ClickProcessBtn();
        new BasePage().ClickOnCustTab();
        new CustomersPage().VerifyCustEntryAndDel();
    })
})