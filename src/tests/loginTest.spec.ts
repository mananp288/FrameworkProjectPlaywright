import { expect, test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("simple login test", async ({ page }) => {

    const loginPage = new LoginPage(page);
    
    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername("mananp288@gmail.com");
    await loginPage.fillPassword("KissiMansh440&");

    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();
    
  });