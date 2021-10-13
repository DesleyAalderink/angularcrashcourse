import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'
import { Task } from '../../Task';
import { ContentfulService } from 'src/app/contentful.service';
import { Entry } from 'contentful';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // tasks: Task[] = [];
  todos: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getContent()
    .then(todos => this.todos = todos)

    // this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }


  deleteTask(task: Task) {
    // this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter((t) => t.id !== task.id)) );
  }

}
