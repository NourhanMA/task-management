import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-task-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './task-table.component.html',
  styleUrl: './task-table.component.scss',
})
export class TaskTableComponent {
  totalRecords: number = 100;
  pageIndex: number = 0;
  pageSize: number = 15;
  isLoading: boolean = false;
  data: any[] = [
    {
      id: 1,
      name: 'Task 1',
      startDate: '2023-01-01',
      urgency: 'High',
      status: 'In Progress',
      assignedTo: 'John Doe',
      endDate: '2023-02-01',
    },
    {
      id: 2,
      name: 'Task 2',
      startDate: '2023-02-01',
      urgency: 'Medium',
      status: 'Completed',
      assignedTo: 'Jane Smith',
      endDate: '2023-03-01',
    },
    {
      id: 3,
      name: 'Task 3',
      startDate: '2023-03-01',
      urgency: 'Low',
      status: 'In Progress',
      assignedTo: 'John Doe',
      endDate: '2023-04-01',
    },
  ];

  onPageChange(event: any) {
    this.pageIndex = event.first / event.rows;
    this.pageSize = event.rows;
  }

  viewTask(row: any) {
    console.log(row);
  }
}
