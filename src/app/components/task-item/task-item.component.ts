import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ContentfulService } from 'src/app/contentful.service';
import { Entry } from 'contentful';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() OnDeleteTask: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes;
  todos: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getContent()
    .then(todos => this.todos = todos)
  }

  OnDelete(task: Task) {
    this.OnDeleteTask.emit(task);
    console.log(`OnDelete fires on ${this.task.id}`);

  }

}
