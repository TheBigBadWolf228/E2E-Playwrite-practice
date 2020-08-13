const {wait} = require('../../../lib');
const {decoratePage} = require('../../../lib');

class AccountPage {
  constructor(page, pageRootSelector = '#center_column') {
    this.rootSelector = pageRootSelector;
    this.page = page;
  }

  async getMyAccountHeaderTitle() {
    await wait(this.page).waitVisibility('.page-heading');
    const elementHandler = await this.page.$('.page-heading');
    return elementHandler.textContent();
  }
}

decoratePage(AccountPage);

module.exports = {
  AccountPage,
};
