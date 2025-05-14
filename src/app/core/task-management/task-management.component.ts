import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TaskTableComponent } from './task-table/task-table.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-task-management',
  standalone: true,
  imports: [TableModule, TaskTableComponent, RouterModule, ButtonModule, CalendarModule],
  templateUrl: './task-management.component.html',
  styleUrl: './task-management.component.scss',
  providers: [DialogService]

})
export class TaskManagementComponent {
  constructor(private dialogService: DialogService) {}

  ref: DynamicDialogRef;
  createTask() {
    this.ref = this.dialogService.open(AddTaskFormComponent, {
      header: 'Create Class',
      width: '40vw',
      dismissableMask: true,
      closable: true,
      modal: true,
    });
  }
}
