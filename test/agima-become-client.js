const formSelector = 'form.new-customers__content-form';

module.exports = {
  'Step 1: navigate to https://www.agima.ru/': function (browser) {
    return browser
      .url('https://www.agima.ru/')
      .click('body a.header__client')
  },
  'Step 2: fill form' : function (browser) {
    return browser
      .pause(500)
      .setValue(`${formSelector} input#name`, 'Test')
      .setValue(`${formSelector} input#email`, 'Test@test.ru')
      .setValue(`${formSelector} textarea#message`, 'test message')
      .click(`${formSelector} label[for="confirm-agreement"]`)
  },
  'Step 3: send form' : function (browser) {
    return browser
      .pause(100)
      .click(`${formSelector} a.js-submit`)
      .assert.containsText('div.new-customers__popup', 'Спасибо')
      .end();
  }
};
