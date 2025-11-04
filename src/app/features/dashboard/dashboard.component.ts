import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DashboardTaskComponent } from './dashboard-task/dashboard-task.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    TableModule,
    TagModule,
    DashboardTaskComponent
  ],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  cardMovements = [
    {
      company: 'Open AI',
      date: 'May 29th, 2024',
      amount: '-$15 USD',
      icon: 'cog',
      iconColor: 'purple'
    },
    {
      company: 'Adobe',
      date: 'May 22th, 2024',
      amount: '+$8 USD',
      icon: 'palette',
      iconColor: 'red'
    },
    {
      company: 'Framer',
      date: 'May 16th, 2024',
      amount: '-$19 USD',
      icon: 'desktop',
      iconColor: 'blue'
    },
    {
      company: 'Webflow',
      date: 'May 12th, 2024',
      amount: '-$29 USD',
      icon: 'globe',
      iconColor: 'blue'
    },
    {
      company: 'Spotify',
      date: 'May 7th, 2024',
      amount: '-$24 USD',
      icon: 'volume-up',
      iconColor: 'green'
    }
  ];

  accountHistory = [
    {
      name: 'Jerome Bell',
      date: 'May 5th, 2024',
      amount: '+€12.875,98',
      account: '**** **** 8288'
    },
    {
      name: 'Annette Black',
      date: 'Mar 17th, 2024',
      amount: '+€7.245,44',
      account: '**** **** 9284'
    },
    {
      name: 'Onyama Limba',
      date: 'May 24th, 2024',
      amount: '-€76.276,90',
      account: '**** **** 2534'
    },
    {
      name: 'Courtney Henry',
      date: 'Jun 28th, 2024',
      amount: '-€2.875,98',
      account: '**** **** 8288'
    },
    {
      name: 'Dianne Russell',
      date: 'Jul 21th, 2024',
      amount: '+€12.423,04',
      account: '**** **** 8234'
    },
    {
      name: 'Amy Elsner',
      date: 'Jul 21th, 2024',
      amount: '+€17.876,24',
      account: '**** **** 9284'
    }
  ];
}