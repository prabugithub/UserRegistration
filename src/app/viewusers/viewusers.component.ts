import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { User } from '../model/user';
import {MatSnackBar} from '@angular/material/snack-bar';
import { RegistrationService } from '../services/user/registration.service';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {
  users: User[];
  displayedColumns: string[] = ['userName', 'email', 'address', 'remove'];
  constructor(private userService: RegistrationService, private snackBar: MatSnackBar) {
    this.userService.getUsers().subscribe(res => this.users = res);
  }

  ngOnInit() {
  }
  removeElement(user, e) {
    console.log(user, e);
    this.userService.deleteUser(user).subscribe(res => {
      if ((res as any).status === 200) {
        this.snackBar.open('User registered successfully!', 'Close', {
          duration: 3000
        });
        this.fetchUpdatedUser();
      }
    });
  }
  fetchUpdatedUser() {
    this.userService.getUsers().subscribe(res => this.users = res);
  }
}
