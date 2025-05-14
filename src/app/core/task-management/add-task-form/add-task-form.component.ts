import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    CommonModule,
    InputTextareaModule,
    CalendarModule,
    DividerModule
  ],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.scss',
})
export class AddTaskFormComponent implements OnInit {
  addTaskForm: FormGroup;
  urgencyList = [
    {
      id: 1,
      name: 'Low',
    },
    {
      id: 2,
      name: 'Medium',
    },
    {
      id: 3,
      name: 'High',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addTaskForm = this.fb.group({
      taskName: ['', Validators.required],
      urgency: ['', Validators.required],
      description: [''],
      startDate: [''],
      endDate: [''],
      assignedTo: ['', Validators.required],
    });
  }

  addTask() {}
}
