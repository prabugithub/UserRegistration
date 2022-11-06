import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      userName: ['', Validators.required],
      email: ['', Validators.required],
      address: this.fb.array([
        this.fb.group({
          state: ['', Validators.required],
          city: ['', Validators.required],
          pincode: new FormControl('', [Validators.required, Validators.maxLength(6), Validators.minLength(6)])
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
        this.resetForm();
      }
    });
  }
  resetForm() {
    this.userForm.reset();
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  }

  public checkAddressError = (controlName: string, errorName: string, ind: number) => {
    const formGrp = this.userForm.controls.address as FormArray;
    return (formGrp.controls[ind] as FormGroup).controls[controlName].hasError(errorName);
  }

  addAddress() {
    const addresses: FormArray = this.userForm.controls.address as FormArray;
    addresses.push(this.fb.group({
      state: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
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
