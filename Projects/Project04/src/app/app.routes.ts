import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { About } from './components/about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'skills', component: Skills },
  { path: 'contact', component: Contact }
];
