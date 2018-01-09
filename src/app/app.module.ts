import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.router';
import { AppService } from './app.service';

import { FilterPipeModule } from 'ngx-filter-pipe';




@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    RightPanelComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routes,
    FilterPipeModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
