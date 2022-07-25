import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../../Task";
import {TASKS} from "../../ddbb-task";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = TASKS[0];
  @Output() onDeleteTask: EventEmitter<Task>=new EventEmitter<Task>();
  @Output() onToggleReminder: EventEmitter<Task>=new EventEmitter<Task>();
  faCoffee = faCoffee;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Task): void {
    //console.log(task)
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
