import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from '../app/_services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
responsedata :any =[];
sorteddata  :any =[];

  ngOnInit(): void {
    
  }
  constructor(private authService : AuthenticationService) {
 
  }

  onGetStartedClick(){
    debugger;
    this.authService.getApiicall().subscribe((response: any) => {
       this.responsedata =  response;
     this.sorteddata = response;
     
        this.sorteddata.sort(this.dynamicSort("stepNumber"));
      for(var i=0;i<this.sorteddata.length;i++){
        this.sorteddata[i].versionContent.sort(this.dynamicSort("-effectiveDate"))
    }
      
    });
  }
   dynamicSort(property :any) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a: { [x: string]: string; },b: { [x: string]: any; }) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }        
    }
}

}








