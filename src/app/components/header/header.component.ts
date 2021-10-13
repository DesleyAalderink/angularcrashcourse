import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/contentful.service';
import { Entry } from 'contentful';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // title: string = 'Task Tracker';
  todos: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getContent()
    .then(todos => this.todos = todos)
  }

  toggleAddTask() {
    console.log('toggle');

  }

}
