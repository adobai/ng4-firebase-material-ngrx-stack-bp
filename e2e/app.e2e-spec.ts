import { Ng4FirebaseMaterialNgrxStackBpPage } from './app.po';

describe('ng4-firebase-material-ngrx-stack-bp App', () => {
  let page: Ng4FirebaseMaterialNgrxStackBpPage;

  beforeEach(() => {
    page = new Ng4FirebaseMaterialNgrxStackBpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
