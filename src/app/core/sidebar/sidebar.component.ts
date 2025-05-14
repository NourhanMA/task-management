import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule, DividerModule, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isCollapsed = false;

  items = [
    {
      label: 'Search',
      icon: 'pi-search',
      expanded: false,
    },
    {
      label: 'Home',
      icon: 'pi-home',
      expanded: false,
      link: '/home',
    },
    {
      label: 'Favourites',
      icon: 'pi-star-fill',
      expanded: false,
      link: '/dashboard',
    },
    {
      label: 'Task Management',
      icon: 'pi-bars',
      expanded: false,
      items: [
        {
          label: 'Tasks',
          link: 'dashboard/tasks',
        },
        {
          label: 'Projects',
          link: 'projects',
        },
        {
          label: 'Departments',
          link: 'departments',
        },
        {
          label: 'Support Tickets',
          link: 'support-tickets',
        },
      ],
    },
    {
      label: 'Sales',
      icon: 'pi-chart-bar',
      link: '/products',
      expanded: false,
    },
    {
      label: 'Point of sale',
      icon: 'inbox.svg',
      link: '/support-center',
      expanded: false,
      items: [
        {
          label: 'Overview',
          link: 'overview',
        },
        
      ],
    },
    {
      label: 'Pruches',
      icon: 'pi-shopping-cart',
      link: '/settings',
      expanded: false,
      items: [
        {
          label: 'Overview',
          link: 'overview',
        },
       
      ],
    },
    {
      label: 'Inventory',
      icon: 'pi-shop',
      link: '/settings',
      expanded: false,
      items: [
        {
          label: 'Overview',
          link: 'overview',
        },
       
      ],
    },
    {
      label: 'Finance',
      icon: 'pi-credit-card',
      link: '/settings',
      expanded: false,
      items: [
        {
          label: 'Overview',
          link: 'overview',
        },
       
      ],
    },
    {
      label: 'Accounting',
      icon: 'settings.svg',
      link: '/settings',
      expanded: false,
      items: [
        {
          label: 'Overview',
          link: 'overview',
        },
       
      ],
    },
    {
      label: 'Employees',
      icon: 'pi-users',
      link: '/settings',
      expanded: false,
      items: [
        {
          label: 'Overview',
          link: 'overview',
        },
       
      ],
    },
    {
      label: 'Reports',
      icon: 'pi-chart-line',
      link: '/settings',
      expanded: false,
      items: [
        {
          label: 'Overview',
          link: 'overview',
        },
       
      ],
    },  {
      label: 'Settings',
      icon: 'pi-cog',
      link: '/settings',
      expanded: false,
      
    },
  ];

  toggleDarkMode() {
    document.body.classList.toggle('dark');
  }
  toggleExpand(item: any) {
    if (item.items) {
      item.expanded = !item.expanded;
    } else if (item.link) {
      // Optional: Navigate if it has a link but no sub-items
    }
  }
  
  combineLink(parentLink: string, childLink: string): string {
    if (!parentLink) return `/${childLink}`;
    return `${parentLink}/${childLink}`;
  }

}
