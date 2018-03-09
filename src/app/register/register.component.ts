import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 model: any = {};
 pageTitle:'Register'
  errorMessage: string;
  constructor(private route: ActivatedRoute,
        private router: Router,private registerService:RegisterService) { }

  ngOnInit() {
  }
register(){
  if(this.model.password!=this.model.confirmpassword){
   this.errorMessage='Password mismatch'
    return false;
  }else{
  this.registerService.registerUser(this.model).subscribe(
      response => {
        this.router.navigate(['/login']);
    },
      error => {
        this.errorMessage = <any>error;
      
      });


  }
}

eventHandler(event) {
    this.errorMessage='';
} 
}
