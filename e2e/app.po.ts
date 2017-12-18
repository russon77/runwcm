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
  static form = {
    disabled() {
      return element(by.css('app-root button[type=submit]')).getAttribute('disabled');
    },
    submit() {
      return element(by.css('app-root button[type=submit]')).click();
    },
    hasError() {
      return element(by.css('app-root ngb-alert')).isPresent();
    },
    clearError() {
      return element(by.css('app-root ngb-alert button.close')).click();
    }
  };

  static webreg = {
    edit(text: string) {
      return element(by.css('app-root #webregdata')).sendKeys(text);
    }
  };
}

export class AppData {
  static day = {
    get() {
      return element(by.css('app-root .schedule-day')).getText();
    },
    edit(day: string) {
      return element(by.css(`app-root .schedule-${day}`)).click();
    }
  };

  static schedule() {
    return element.all(by.css('app-root .schedule-data li')).map(ef => ef.getText());
  }

  static available() {
    return element(by.css('app-root .schedule-content')).isPresent();
  }
}
