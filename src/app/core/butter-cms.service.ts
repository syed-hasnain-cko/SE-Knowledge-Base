import { Injectable } from '@angular/core';
import Butter from 'buttercms';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ButterCmsService {

  butter: any;
  constructor() {
   this.butter = Butter(environment.apiToken);
 }

 params = {
  'query': ''
}

 getKnowledgeBaseHomeType() {
  return this.butter.page.retrieve('*', 'se-knowledge-base-for-merchants');
}


SearchKnowledgeBaseSection(page_type: string, page:number = 1, page_size: number = 10) {
  return this.butter.page.search(page_type, {
    page_type: 'article_type'
  });
}

getAllPageArticles(){
  return this.butter.page.list('article_type');
}


getKnowledgeBaseSectionType(section: string) {
  return this.butter.page.retrieve('*', section);
}


getKnowledgeBaseArticleType(article: string) {
  return this.butter.page.retrieve('*', article);
}


}

