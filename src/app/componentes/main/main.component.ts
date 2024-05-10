import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {

  constructor(private router: Router) {
    this.checkActive();
  }

  checkActive() {
    setTimeout(() => {
      const url = this.router.url;
      console.log('url', url);
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach((navLink:Element) => {
        const href = navLink.getAttribute('href');
        if (href === url) {
          navLink.parentElement?.classList.add('active');
        } else {
          navLink.parentElement?.classList.remove('active');
        }
      });
    }, 100);

  }
}
