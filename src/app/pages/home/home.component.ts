import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButterCmsService } from 'src/app/core/butter-cms.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

  export class HomeComponent implements OnInit {


    homePageData: any;
    searchText: string = '';
   
   
    constructor(
      private butterCMSService: ButterCmsService,
      private router: Router,
      private activatedRoute: ActivatedRoute
    ) { }
   
   
    ngOnInit(): void {
      this.butterCMSService.getKnowledgeBaseHomeType()
      .then((resp: any) => {
        this.homePageData = resp?.data?.data;
      })
      .catch(function(error: any) {
        console.log('error', error)
      });

    }
    handleSearch() {
      this.router.navigate(['search'], {
        relativeTo: this.activatedRoute,
        queryParams: {
          query: this.searchText
        },
        queryParamsHandling: 'merge',
        skipLocationChange: true
      });
    }
   }

