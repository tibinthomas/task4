import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RightPanelComponent } from './right-panel/right-panel.component';

export const router: Routes = [
    { path: 'detail', component: RightPanelComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);