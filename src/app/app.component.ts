import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'infobeans-assignment';
  selectedRoute= "/personalInformation";
  constructor (private router: Router) {}
  
  ngOnInit() {
    this.selectedRoute = this.router.url;
  }

  navigateTo() {
    this.router.navigate([this.selectedRoute]); 
  }
  
}
