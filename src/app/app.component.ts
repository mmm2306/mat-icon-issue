import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public iconRegistry: MatIconRegistry,
    public sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon('information', sanitizer.bypassSecurityTrustResourceUrl('assets/images/information.svg'));
    }
}
