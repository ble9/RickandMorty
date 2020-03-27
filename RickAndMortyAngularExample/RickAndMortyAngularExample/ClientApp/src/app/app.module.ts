import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { EpisodeListComponent } from './episodeList/episodeList.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterComponent } from './character/character.component';
import { WubbaLubbaPipe } from './wubba-lubba.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { AuthorizedGuardGuard } from './authorized-guard.guard';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { ForbiddenValidatorDirective } from './forbidden-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    EpisodeListComponent,
    CharacterListComponent,
    CharacterComponent,
    WubbaLubbaPipe,
    NotFoundComponent,
    CharacterDetailComponent,
    EpisodeDetailComponent,
    CreateCharacterComponent,
    ForbiddenValidatorDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'episodeList', component: EpisodeListComponent, pathMatch: 'full' },
      { path: 'characterList', component: CharacterListComponent, pathMatch: 'full' },
      { path: 'createCharacter', component: CreateCharacterComponent, pathMatch: 'full' },
      { path: 'character/:id', component: CharacterDetailComponent, pathMatch: 'full', canActivate: [AuthorizedGuardGuard] },
      { path: 'episode/:episodeId', component: EpisodeDetailComponent, pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
