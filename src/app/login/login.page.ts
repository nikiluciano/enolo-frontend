import { Component, OnInit } from '@angular/core'; 
@Component({ 
  selector: 'app-login', 
  templateUrl: './login.page.html', 
  styleUrls: ['./login.page.scss'], 
}) 
export class LoginPage implements OnInit { 
 
  email: string; 
  pass: string; 
 
  ngOnInit() { 
  } 
  getCredentials() { 
    console.log(this.email);  
  }  
  pwdIcon = "eye-outline"; 
  showPwd = false; 
 
  togglePwd() { 
    this.showPwd = !this.showPwd; 
    this.pwdIcon = this.showPwd ? "eye-off-outline" : "eye-outline"; 
  }  
 
}
