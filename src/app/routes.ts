import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  },
  {
    path: 'ttt',
    component: TictactoeComponent,
    title: 'Tic-Tac-Toe'
  }
];

export default routeConfig;
