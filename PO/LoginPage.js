// pages/LoginPage.js
class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('//input[@name = "username"]');
    this.passwordInput = page.locator('//input[@name = "password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.flashMessage = page.locator('//img[@alt = "client brand banner"]');
  }

  async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertSuccessMessage() {
    await expect(this.flashMessage).toBeVisible;
  }

  async assertUrlAfterLogin() {
    await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  }
  
}
const { expect } = require('@playwright/test');
module.exports = { LoginPage };
