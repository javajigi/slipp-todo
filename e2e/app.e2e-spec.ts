import { SlippTodoPage } from './app.po';

describe('slipp-todo App', () => {
  let page: SlippTodoPage;

  beforeEach(() => {
    page = new SlippTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
