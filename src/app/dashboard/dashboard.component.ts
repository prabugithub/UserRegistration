import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  background: ThemePalette = undefined;
  constructor() { }

  ngOnInit() {
  }
  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

}
