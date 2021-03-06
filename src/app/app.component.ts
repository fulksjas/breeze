import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'breeze';
  constructor(private router: Router) {

  }

  /**
   * once ready, navigate to the landing page
   *
   * @memberof AppComponent
   */
  ngAfterViewInit() {
    this.router.navigate(['/landing']);
  }
}
