import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoArray = ['task1', 'task2', 't3', 't4'];
  doneArray = [];
  taskStr = 't';

  onClickTask(task: string) {
    console.log('onClickTask(): task: ', task);
    this.todoArray.splice(this.todoArray.indexOf(task), 1);
    this.doneArray.push(task);
  }

}
