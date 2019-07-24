import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**
   * Flag to toggle the splash screen.
   *
   * @type {boolean}
   * @memberof AppComponent
   */
  public showSplashScreen: boolean;

  public constructor() {
    this.showSplashScreen = true;
  }

  /**
   * Angular component initialization life-cycle hook.
   * Initializes AAD authentication.
   * Fetches user's details.
   * Initializes route change event subscriptions.
   * Sets user's access level for features.
   *
   * @memberof AppComponent
   */
  public ngOnInit(): void {
    // setInterval (() => this.showSplashScreen = false, 2000);
  }
}
