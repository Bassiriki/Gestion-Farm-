import { Component } from '@angular/core';
import { LogoTitleComponent } from './logo-title/logo-title.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, LogoTitleComponent, NavBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
