import { browser, by, element } from 'protractor';

export class AppPage {
  static navigateTo() {
    return browser.get('/');
  }
}

export class AppBrand {
  static getBrandText() {
    return element(by.css('app-root h1')).getText();
  }
}

export class AppFields {
  static webreg = {
    disabled() {
      return element(by.css('app-root button[type=submit]')).getAttribute('disabled');
    },
    edit(text: string) {
      return element(by.css('app-root #webregdata')).sendKeys(text);
    }
  }
}
