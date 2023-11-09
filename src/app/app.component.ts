import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
  ],
  template: `
<main>
  <header class="brand-name">
    <a [routerLink]="['/']">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </a>
    <a [routerLink]="['ttt']">
      <img class="brand-logo" src="/assets/hash-svgrepo-com.svg" alt="logo" aria-hidden="true">
    </a>
  </header>
  <section class="content">
    <router-outlet></router-outlet>
  </section>
</main>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}