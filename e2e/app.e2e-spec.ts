import { TunnelBPage } from './app.po';

describe('tunnel-b App', () => {
  let page: TunnelBPage;

  beforeEach(() => {
    page = new TunnelBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('yuc works!');
  });
});
