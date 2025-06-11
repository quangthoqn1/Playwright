// BỎ phần này đi nếu đã có cấu hình trong playwright.config.js
// test.use({ ... })

test('Login successfully using Page Object Model', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
  await loginPage.assertSuccessMessage();
  await loginPage.assertUrlAfterLogin();
});
