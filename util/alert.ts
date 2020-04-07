import { protractor, browser } from "protractor";

export class alert {
    static VerefyAndCloseAlert(text: String) {
        // To identefy popup and switch to it    
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 4000, "Alert not found");

        let alert = browser.switchTo().alert();
        let alertText = alert.getText();

        expect(alertText).toContain(text);
        alert.accept();
    }
}