import { AnguPage } from './app.po';

describe('angu App', () => {
  let page: AnguPage;

  beforeEach(() => {
    page = new AnguPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
