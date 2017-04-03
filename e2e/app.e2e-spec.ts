import { JqxchartPage } from './app.po';

describe('jqxchart App', () => {
  let page: JqxchartPage;

  beforeEach(() => {
    page = new JqxchartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
