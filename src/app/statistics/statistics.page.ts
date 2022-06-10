import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit, AfterViewInit {
  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;

  doughnutChart: any;
  abc: any;

  constructor(private menu: MenuController) { }


  ngAfterViewInit() {
    this.barCharMethod();
    console.log("afterinit");
    setTimeout(() => {
      console.log(this.abc.nativeElement.innerText);
    }, 1000)
  }

  ngOnInit() {
    this.barCharMethod()
  }

  openMenu() {
    this.menu.open();
  }

  ionViewWillEnter() {
    this.menu.enable(true);
    this.barCharMethod();
  }

  async barCharMethod() {
      this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
        type: 'doughnut',
        data: {
          labels: ['BJP', 'Congress', 'AAP', 'CPM', 'SP'],
          datasets: [{
            label: '# of Votes',
            data: [50, 29, 15, 10, 7],
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            hoverBackgroundColor: [
              '#FFCE56',
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#FF6384'
            ]
          }]
        }
      });
    }
  

}

