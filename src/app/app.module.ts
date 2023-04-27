import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewKnowledgeBaseSectionComponent } from './pages/view-knowledge-base-section/view-knowledge-base-section.component';
import { ViewKnowledgeBaseArticleComponent } from './pages/view-knowledge-base-article/view-knowledge-base-article.component';
import { SearchKnowledgeBaseComponent } from './pages/search-knowledge-base/search-knowledge-base.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewKnowledgeBaseSectionComponent,
    ViewKnowledgeBaseArticleComponent,
    SearchKnowledgeBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
