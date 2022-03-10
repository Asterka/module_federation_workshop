import { ElevatorStateService } from './elevator-state.service';
import { Component } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  constructor(private router:Router, public elevatorStateService: ElevatorStateService) {
    this.subscribeToRouterEvents();
  }

  redirect(url: string){
    this.router.navigateByUrl(url);
    this.elevatorStateService.resetErrors();
  }

  public subscribeToRouterEvents() {
    /**
     * Что-либо связанное с событиями роутера можно делать тут
    */
    this.router.events.subscribe((val: any) => {
      switch(true){
        case val instanceof NavigationError:
          // Можно ехать в другую квартиру
          let number = val.url.split('/')[1] - 1;
          this.elevatorStateService.hasErrored[number] = true;
        break;
        case val instanceof NavigationEnd:

        break;
        case val instanceof NavigationStart:
        break;
      }
    });
  }

}
