import {Routes} from '@angular/router';
import { MainPageContentComponent } from './main-page/components/header.main.component';
import { ContentComponent } from './start-page/components/content.component';

export const routes = [
    {path: 'header.main.component', component: MainPageContentComponent},
    {path: 'content.component', component: ContentComponent},
];

