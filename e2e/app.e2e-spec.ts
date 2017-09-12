import { Angular4SamplePage } from './app.po';

describe('angular4-sample App', () => {
  let page: Angular4SamplePage;

  beforeEach(() => {
    page = new Angular4SamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
