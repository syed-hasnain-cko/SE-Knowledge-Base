import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButterCmsService } from 'src/app/core/butter-cms.service';


@Component({
 selector: 'app-search-knowledge-base',
 templateUrl: './search-knowledge-base.component.html',
 styleUrls: ['./search-knowledge-base.component.scss']
})
export class SearchKnowledgeBaseComponent implements OnInit {
 id: string | any ;
 knowledgeBaseData: any;
 searchText: string = '';
 headerId: string ='';


 constructor(
   private route: ActivatedRoute,
   private router: Router,
   private butterCMSService: ButterCmsService
 ) {}


 ngOnInit(): void {
   this.route.queryParams
     .subscribe(params => {
      this.headerId = params['query']
       this.id = params['query'];
       console.log(params);
     }
   );
 
    this.butterCMSService.SearchKnowledgeBaseSection(this.id)
    .then((resp: any) => {
      this.knowledgeBaseData = resp?.data?.data;
     
    })
    .catch(function(error: any) {
      console.log('section error', error)
    });
   

 }


 searchKnowledgeBaseSection(){

  if(this.searchText !=''){
    this.headerId = this.searchText
  }

    this.butterCMSService.SearchKnowledgeBaseSection(this.searchText)
    .then((resp: any) => {
      this.knowledgeBaseData = resp?.data?.data;
      
    })
    .catch(function(error: any) {
      console.log('section error', error)
    });
  
  
 }
}