const LoginPage = require('../pageobjects/login_page');

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
    await LoginPage.open();
  });

  users.forEach(({ name, credentials, expectedError }) => {
    it(`should show error toast message when logging in with ${name}`, async () => {
      await LoginPage.login(credentials.username, credentials.password);
      expect(await LoginPage.isErrorVisible()).toBe(true);
      const errorText = await LoginPage.getErrorMessage();
      expect(errorText).toContain(expectedError);
    });
  });
});