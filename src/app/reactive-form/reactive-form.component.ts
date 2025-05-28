
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
   templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  userForm!: FormGroup;
  submitted = false;
  submittedDate = new Date();

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      salary: [0],
      experience: [0],
      joinDate: ['']
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.submitted = true;
      this.submittedDate = new Date();
    }
  }

  get user() {
    return this.userForm.value;
  }
}
