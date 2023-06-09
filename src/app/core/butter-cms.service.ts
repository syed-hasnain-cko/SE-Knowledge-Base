import { Injectable } from '@angular/core';
import Butter from 'buttercms';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButterCmsService {

  butter: any;
  constructor(private http: HttpClient) {
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

listenToWebhook(url: string): Observable<any> {
  return new Observable((observer) => {
    const eventSource = new EventSource(url);
    eventSource.addEventListener('message', (event) => {
      observer.next(JSON.parse(event.data));
    });
    eventSource.addEventListener('error', (error) => {
      observer.error(error);
    });
  });
}


}

