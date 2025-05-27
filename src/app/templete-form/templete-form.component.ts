import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-templete-form',
  imports: [CommonModule,FormsModule],
  standalone:true,
  templateUrl: './templete-form.component.html',
  styleUrl: './templete-form.component.css'
})
export class TempleteFormComponent {

 user = {
    name: '',
    email: '',
    gender: '',
    message: '',
    salary: 0,
    taxRate: 0,
    experience: 0,
    joinDate: ''
  };

  submitted = false;
  submittedDate = new Date();

  onSubmit(form: any) {
    this.submitted = true;
    this.submittedDate = new Date();
  }
}
