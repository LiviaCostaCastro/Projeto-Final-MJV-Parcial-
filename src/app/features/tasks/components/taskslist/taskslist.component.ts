import { Component, OnInit } from '@angular/core';
import { Tasks } from '../../models/tasks.models';

@Component({
  selector: 'app-tasks',
  templateUrl: './taskslist.component.html',
  styleUrls: ['./taskslist.component.scss']
})
export class TaskslistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
