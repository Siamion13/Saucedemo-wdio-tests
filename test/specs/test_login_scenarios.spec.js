const LoginPage = require('../pageobjects/login_page');
const allure = require('@wdio/allure-reporter')

const users = [
  {
    name: 'locked user',
    credentials: { username: 'locked_out_user', password: 'secret_sauce' },
    expectedError: 'Sorry, this user has been locked out'
  },
  {
    name: 'no password',
    credentials: { username: 'locked_out_user', password: '' },
    expectedError: 'Password is required'
  },
  {
    name: 'no username',
    credentials: { username: '', password: 'secret_sauce' },
    expectedError: 'Username is required'
  }
];

describe('Login error messages', () => {
  beforeEach(async () => {
    allure.startStep('Open login page');
    await LoginPage.open();
    allure.endStep();
  });

  users.forEach(({ name, credentials, expectedError }) => {
    it(`should show error toast message when logging in with ${name}`, async () => {
      allure.startStep('Attempt to login');
      await LoginPage.login(credentials.username, credentials.password);
      allure.endStep();
      allure.startStep('Verify error is visible');
      expect(await LoginPage.isErrorVisible()).toBe(true);
      allure.endStep();
      allure.startStep('Check error message text');
      const errorText = await LoginPage.getErrorMessage();
      expect(errorText).toContain(expectedError);
      allure.endStep();
    });
  });
});