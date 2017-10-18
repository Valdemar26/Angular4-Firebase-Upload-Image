import { Angular4FirebaseStoragePage } from './app.po';

describe('angular4-firebase-storage App', () => {
  let page: Angular4FirebaseStoragePage;

  beforeEach(() => {
    page = new Angular4FirebaseStoragePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
