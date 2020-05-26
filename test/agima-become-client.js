const formSelector = 'form.new-customers__content-form';

module.exports = {
  'Step 1: navigate to https://www.agima.ru/': function (browser) {
    browser
      .url('https://www.agima.ru/')
      .click('body a.header__client')
      .pause(500)
  },
  'Step 2: fill form' : function (browser) {
    browser
      .setValue(`${formSelector} input#name`, 'Test')
      .setValue(`${formSelector} input#email`, 'Test@test.ru')
      .setValue(`${formSelector} textarea#message`, 'test message')
      .click(`${formSelector} label[for="confirm-agreement"]`)
      .pause(500)
  },
  'Step 3: send form' : function (browser) {
    browser
      .click(`${formSelector} a.js-submit`)
      .pause(500)
      .assert.containsText('div.new-customers__popup', 'Спасибо')
      .end();
  }
};
