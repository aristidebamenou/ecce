import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { ContactComponent } from './contact/contact.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { PricesComponent } from './prices/prices.component';
import { HouseRulesComponent } from './house-rules/house-rules.component';
import { BlogComponent } from './blog/blog.component';
import { ProgramComponent } from './program/program.component';
import { SubscriptionComponent } from './subscription/subscription.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTreeModule} from "@angular/material/tree";



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sessions', component: SessionsComponent },
  { path: 'sessionDetails', component: SessionDetailsComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'houseRules', component: HouseRulesComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    PostComponent,
    ContactComponent,
    SessionsComponent,
    SessionDetailsComponent,
    PricesComponent,
    HouseRulesComponent,
    BlogComponent,
    ProgramComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(routes),
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
