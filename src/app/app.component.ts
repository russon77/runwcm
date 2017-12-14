import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public webregControl = new FormControl(null, Validators.required);

  lat = 51.678418;
  lng = 7.809007;

  public onSubmit(): boolean {
    return false;
  }
}
