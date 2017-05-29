import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from '../../validators/custom.validator';
import { DataService } from '../../services/data.service';
import { Ui } from '../../utils/ui';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers: [Ui, DataService] //não esquecer de injetar a classe estática aqui ou globalmente no app.module.ts
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private ui: Ui, private dataService: DataService) {
    this.form = this.fb.group({  
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required,        
      ])]
      ,
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20)
        ,Validators.required
      ])]      
    });
  }
  
  ngOnInit() { 
    // this
    //   .dataService
    //   .getCourses()
    //   .subscribe(result => {
    //     console.log(result)  
    //   }, error => {
    //     console.log(error)  
    //   });
  }
  
  checkEmail(){            
    this.ui.lock('emailControl');
    
    setTimeout(()=>{        
      this.ui.unlock('emailControl');
       console.log(this.form.controls['email'].value);
      }, 2000);
    }

  submit(){
    this.dataService.createUser(this.form.value);
  }

}
