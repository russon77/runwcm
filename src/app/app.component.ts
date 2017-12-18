import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ISchedule, parseWebregData } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public webregControl = new FormControl(null, Validators.required);
  public hasError = false;
  public schedule: any = null;
  public selectedDay: keyof ISchedule = 'monday';

  lat = 40.741301;
  lng = -74.175739;

  public onSubmit(): boolean {
    const schedule = parseWebregData(this.webregControl.value);

    if (null !== schedule) {
      this.hasError = false;
      this.schedule = schedule;
    } else {
      this.hasError = true;
    }

    return false;
  }

  public onDismissError(): void {
    this.hasError = false;
  }
}
