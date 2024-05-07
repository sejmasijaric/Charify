import {Routes} from '@angular/router';
import { MainPageContentComponent } from './start-page/components/header.main.component';
import { ContentComponent } from './start-page/components/content.component';
import { ChairPageContentComponent } from './start-page/components/content.chair.view';
import { BuerostuhlComponent } from './start-page/components/buerostuhl.view';
import { SesselComponent } from './start-page/components/sessel.view';

export const routes = [
    {path: 'header.main.component', component: MainPageContentComponent},
    {path: 'content.component', component: ContentComponent},
    {path: 'content.chair.view', component: ChairPageContentComponent},
    {path: 'buerostuhl.view', component: BuerostuhlComponent},
    {path: 'sessel.view', component: SesselComponent}
];

