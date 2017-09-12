import { Component } from '@angular/core';
import { ObserverService } from './Common/observer.service';
@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = "Title";
  constructor(private observerService: ObserverService) {
    this.observerService.attach(this.callback, "notify", "notify");
  }
  callback(params): void {
    alert(params);
  }
}
