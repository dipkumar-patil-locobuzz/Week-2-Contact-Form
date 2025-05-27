import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TempleteFormComponent } from "./templete-form/templete-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TempleteFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Templete-Drive-form';
}
