import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButterCmsService } from 'src/app/core/butter-cms.service';


@Component({
 selector: 'app-view-knowledge-base-article',
 templateUrl: './view-knowledge-base-article.component.html',
 styleUrls: ['./view-knowledge-base-article.component.scss'],
 encapsulation: ViewEncapsulation.None,
})
export class ViewKnowledgeBaseArticleComponent implements OnInit {

 id: string | any ;
 articleData: any;
 queryParam: string ='';
 sectionId: string | any;
 fromSectionRoute: boolean=true;

 constructor(
  private router: Router,
   private route: ActivatedRoute,
   private butterCMSService: ButterCmsService
 ) {}

 ngOnInit(): void {
  this.route.queryParams
  .subscribe(params => {
   this.queryParam = params['search'] 
   if(this.queryParam != undefined){
      this.fromSectionRoute = false;
   }
   console.log(this.fromSectionRoute)
   console.log(this.queryParam);
    console.log(params);
  }
);
   this.sectionId = this.route.snapshot.paramMap.get('sectionId');
   this.id = this.route.snapshot.paramMap.get('articleId');
   console.log('id', this.id);
  
   this.butterCMSService.getKnowledgeBaseArticleType(this.id)
   .then((resp: any) => {
     this.articleData = resp?.data?.data;
     console.log('article data', resp?.data?.data)
   })
   .catch(function(error: any) {
     console.log('article error', error)
   });

   this.butterCMSService.listenToWebhook('/webhook').subscribe((data) => {
    console.log('Received data from webhook:', data);
    this.butterCMSService.getKnowledgeBaseArticleType(data.id).then((resp: any)=>{
console.log("Response data" + resp)
    });
  });
 }

 handleSearch() {
  this.router.navigate(['search'], {
    relativeTo: this.route,
    queryParams: {
      query: this.queryParam
    },
    queryParamsHandling: 'merge',
    skipLocationChange: true
  });
}
}

