export class Task {
  key: string;
  title: string;
  completed = false;

  constructor(title?: string, completed?: boolean) {
    this.title = title;
    if (typeof completed !== "undefined") {
      this.completed = completed;
    }
  }

  isChangeTitle(title: string) {
    return title.length && title !== this.title;
  }

  changeTitle(title: string) {
    return new Task(title, this.completed);
  }

  changeCompleted() {
    return new Task(this.title, !this.completed);
  }
}