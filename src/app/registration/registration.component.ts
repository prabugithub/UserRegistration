import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { RegistrationService } from '../services/user/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private userService: RegistrationService) {
    this.userForm = this.fb.group({
      userName: [''],
      email: [''],
      address: this.fb.array([
        this.fb.group({
          state: [''],
          city: [''],
          pincode: ['']
        })
      ])
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userForm.value);
    this.userService.addUser(this.userForm.value).subscribe(res => {
      if ((res as any).status === 200) {
        this.snackBar.open('User registered successfully!', 'Close', {
          duration: 3000
        });
      }
    });
  }
  resetForm() {
    this.userForm.reset();
  }
  addAddress() {
    const addresses: FormArray = this.userForm.controls.address as FormArray;
    addresses.push(this.fb.group({
      state: '',
      city: '',
      pincode: ''
    }));
  }
  deleteAdress() {
    const addresses: FormArray = this.userForm.controls.address as FormArray;
    if (addresses.length > 1) {
      addresses.removeAt(addresses.length - 1);
    } else {
      this.snackBar.open('Can\'t be deleted default address', 'Close', {
        duration: 3000
      });
    }
  }
}
