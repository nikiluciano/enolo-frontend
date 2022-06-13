import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Chart, registerables } from 'chart.js';
import { StatisticsService } from '../services/statistics.service';
import colors from '../utilites/colors.json'
Chart.register(...registerables);


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit, AfterViewInit {
  /**
   * Canvas to draw on the charts
   */
  @ViewChild('pieCanvas') private pieCanvas: ElementRef;
  @ViewChild('barCanvas') private barCanvas: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  @ViewChild('barCanvasSuppliers') private barCanvasSuppliers: ElementRef;


  barChart: any;
  barSuppliers: any;
  pieStatsWaste: any;
  abc: any;

  typologyStats: any;
  typologyLabels = [];
  typologyValues = [];

  suppliersStats: any;
  suppliersLabels = [];
  suppliersValues = [];

  wasteStats: any;
  wasteLabels = [];
  wasteValues = [];

  colors = colors.bar_colors;
  typologyColors = [];
  typologyBorderColors = [];
  suppliersColors = [];
  suppliersBorderColors = [];

  loading = false;

  constructor(private menu: MenuController,
    private statisticsService: StatisticsService) { }


  async ngAfterViewInit() {


    this.getByTypologyStats()
    this.getBySuppliersStats()
    this.getWasteStats()
    setTimeout(() => {
      this.loading = true
      this.barChartTypologies();
      this.barChartSuppliers();
      this.pieWaste()
      this.loading = false

    }, 1500);

  }


  ngOnInit() {

  }


  async ionViewWillEnter() {
    this.menu.enable(true);

  }


  openMenu() {
    this.menu.open();
  }


  /**
   * bar chart for typology and kg stats
   */
  barChartTypologies() {

    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.typologyLabels,
        datasets: [{
          label: '# di quantità(kg) per tipologia',
          data: this.typologyValues,
          backgroundColor: this.typologyColors,
          borderColor: this.typologyBorderColors,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });
  }


  /**
  * bar chart for suppliers and kg stats
  */
  barChartSuppliers() {
    this.barSuppliers = new Chart(this.barCanvasSuppliers.nativeElement, {
      type: 'bar',
      data: {
        labels: this.suppliersLabels,
        datasets: [{
          label: '# di quantità(kg) per fornitori',
          data: this.suppliersValues,
          backgroundColor: this.suppliersColors,
          borderColor: this.suppliersBorderColors,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });
  }

/**
 * pie chart for waste stats
 */
  pieWaste() {
    this.pieStatsWaste = new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: this.wasteLabels,
        datasets: [{
          label: 'scarto (in kg) dei processi',
          data: this.wasteValues,
          backgroundColor: ["rgba(47,79,79,1)", "rgba(219,112,147,1)"],
          borderColor: ["rgba(47,79,79,0.2)", "rgba(219,112,147,0.2)"],
          borderWidth: 1
        }]
      },
    });
  }



/**
 * 
 * @param array array of colors to be shuffled
 * @returns the array shuffled
 */
  shuffleColors(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }


  /**
   * get the typology stats from the DB
   */
  async getByTypologyStats() {
    this.statisticsService.getKgForTypology()
      .then(
        res => {
          this.typologyStats = res;
          this.createIndexesTypologies()
          this.generateColorsTypologies()
        }
      )
      .catch(
        err => {

        }
      )
  }


  /**
   * given the typology stats object, 
   * it creates the labels and values to be shown
   */
  async createIndexesTypologies() {

    this.typologyStats.forEach(element => {
      this.typologyValues.push(element.total)
      this.typologyLabels.push(element._id)
    });
  }



   /**
   * based on the length of the typologyStats array,
   * generate the right number of colors needed
   */
  async generateColorsTypologies() {
    let col = this.shuffleColors(this.colors)
    for (let i = 0; i < this.typologyStats.length; i++) {
      this.typologyColors.push(col[i].background)
      this.typologyBorderColors.push(col[i].border)

    }
    /*  console.log(JSON.stringify(this.typologyColors))
     console.log(JSON.stringify(this.typologyBorderColors)) */
  }


  /**
   * get the suppliers stats from the DB
   */
  async getBySuppliersStats() {
    this.statisticsService.getKgForSuppliers()
      .then(res => {
        this.suppliersStats = res
        this.createIndexesSuppliers()
        this.generateColorsSuppliers()
      })
      .catch(err => {

      })
  }


    /**
   * given the suppliers stats object, 
   * it creates the labels and values to be shown
   */
  createIndexesSuppliers() {
    this.suppliersStats.forEach(element => {
      this.suppliersValues.push(element.total)
      this.suppliersLabels.push(element._id)
    });

  }


  /**
   * based on the length of the suppliersStats array,
   * generate the right number of colors needed
   */
  generateColorsSuppliers() {
    let col = this.shuffleColors(this.colors)

    for (let i = 0; i < this.suppliersStats.length; i++) {
      this.suppliersColors.push(col[i].background)
      this.suppliersBorderColors.push(col[i].border)

    }
    console.log(JSON.stringify(this.suppliersColors))
    console.log(JSON.stringify(this.suppliersBorderColors))
  }




  getWasteStats() {
    this.statisticsService.getWasteStats()
      .then(res => {
        this.wasteStats = res
        this.createIndexesWaste()
      })
      .catch(err => {

      })

  }


  createIndexesWaste() {

    this.wasteValues.push(this.wasteStats.destemmingWaste)
    this.wasteValues.push(this.wasteStats.winemakingWaste)
    this.wasteLabels.push("Diraspatura")
    this.wasteLabels.push("Vinificazione")

  }




  initializeVariables() {

    this.typologyLabels = [];
    this.typologyValues = [];


    this.suppliersLabels = [];
    this.suppliersValues = [];

    this.typologyColors = [];
    this.typologyBorderColors = [];
    this.suppliersColors = [];
    this.suppliersBorderColors = [];

  }
}

