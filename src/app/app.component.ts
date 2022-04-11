import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router:Router) {}

  button1(){

  }

  button2(){

  }

  button3(){
    this.router.navigate(["./carichi"])
  }

  button4(){

  }
  
  button5(){

   }

}
