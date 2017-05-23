import { browser, by, element } from 'protractor';

export class TunnelBPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('yuc-root h1')).getText();
  }
}
