import { XlsxJsonToXlsxPage } from './app.po';

describe('xlsx-json-to-xlsx App', () => {
  let page: XlsxJsonToXlsxPage;

  beforeEach(() => {
    page = new XlsxJsonToXlsxPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
