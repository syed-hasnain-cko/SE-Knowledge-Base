import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ButterCmsService } from 'src/app/core/butter-cms.service';

@Component({
 selector: 'app-view-knowledge-base-section',
 templateUrl: './view-knowledge-base-section.component.html',
 styleUrls: ['./view-knowledge-base-section.component.scss'],
})
export class ViewKnowledgeBaseSectionComponent implements OnInit {

 id: string | any ;
 sectionData: any;
 knowledgeBaseData: any;
 searchText: string = '';
 searchIndicator: boolean =false;

 constructor(
   private route: ActivatedRoute,
   private butterCMSService: ButterCmsService
 ) {}

 ngOnInit(): void {
   this.id = this.route.snapshot.paramMap.get('id')
   console.log('id', this.id);

   this.butterCMSService.getKnowledgeBaseSectionType(this.id)
   .then((resp: any) => {
     this.sectionData = resp?.data?.data;
     console.log('section data', resp?.data?.data)
   })
   .catch(function(error: any) {
     console.log('section error', error)
   });
 }

 searchKnowledgeBaseSections(){
  this.searchIndicator = true;
  if(this.searchText != ''){
    this.butterCMSService.SearchKnowledgeBaseSection(this.searchText)
    .then((resp: any) => {
      this.knowledgeBaseData = resp?.data.data;
    })
    .catch(function(error: any) {
      console.log('section error', error)
    });
  }
 }
}