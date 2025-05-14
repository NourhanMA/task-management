import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./core/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    children: [
      {
        path: 'tasks',
        loadComponent: () =>
          import('./core/task-management/task-management.component').then(
            (c) => c.TaskManagementComponent
          ),
      },
     
    ],
  },
];
