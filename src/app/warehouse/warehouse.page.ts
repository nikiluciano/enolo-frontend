import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../services/warehouse.service';
import { IonList, MenuController, PickerController } from '@ionic/angular';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.page.html',
  styleUrls: ['./warehouse.page.scss'],
})
export class WarehousePage implements OnInit {

  patchData = {
    caps: '',
    tags: '',
    bottle: ''
  }

  currentBottle: number;
  newCapsQuantity: number;
  newTagsQuantity: number;
  newBottleQuantity: number;
  warehouse: any;
  contentLoaded = false;
  closeAllItems: any;
  button = false;
  capsAreChanged = false;
  tagsAreChanged = false;
  bottleArechanged = false;

  private selectedNumber: string;


  
  constructor(public warehouseService: WarehouseService,
              public menu:MenuController) { }

  ionViewDidEnter(): void {
    this.menu.enable(true);
  }


  ngOnInit() {

    this.resetValues()
    this.getWarehouse();
    this.saveCapsQuantity();

  }

  //function to refresh event 
  doRefresh(event) {
    this.getWarehouse();
    this.resetValues();
    setTimeout(() => {
      event.target.complete()
    }, 2000);

  }

  //function get for warehouse
  async getWarehouse() {
    await this.warehouseService.getWarehouse().then(
      (res: any) => {
        if (res) {

          this.contentLoaded = true
          this.warehouse = res
          this.currentBottle = this.warehouse.bottle_quantity

        } else {
        }
      })
  }


  slideOpts = {
    slidesPerView: 3,
    centerSlide: true,
    loop: false,
  }

  // function to change page, refill to save page

  async change() {

    this.button = true;

  }


  async capsPicker() {

    var quantity: number = + this.selectedNumber

    this.newCapsQuantity = quantity

    if (this.newCapsQuantity == 0) {

      this.capsAreChanged = false

    } else {

      this.capsAreChanged = true

    }

    console.log(this.capsAreChanged)
    console.log(this.warehouse.caps_quantity + this.newCapsQuantity)

  }

  async bottlePicker() {

    var quantity: number = + this.selectedNumber

    this.newBottleQuantity = quantity

    if (this.newBottleQuantity == 0) {

      this.bottleArechanged = false

    } else {

      this.bottleArechanged = true
    }
    console.log(this.newBottleQuantity)
  }

  async tagsPicker() {
    var quantity: number = + this.selectedNumber
    this.newTagsQuantity = quantity

    if (this.newTagsQuantity == 0) {

      this.tagsAreChanged = false

    } else {

      this.tagsAreChanged = true

    }
  }

  //function to save new caps quantity
  async saveCapsQuantity() {
    interface CapsPatch { quantity: number }
    var caps: CapsPatch = {
      quantity: 0
    }

    caps.quantity = this.newCapsQuantity;

    await this.warehouseService.updateCapsQuantity(caps).then(
      (res: any) => {
        if (res) {
          console.log(res)
        }
      },
      (error: any) => {
      }
    );
  }

  //function to save new tags quantity
  async saveTagsQuantity() {
    interface TagsPatch { quantity: number }
    var tags: TagsPatch = {
      quantity: 0
    }

    tags.quantity = this.newTagsQuantity

    this.warehouseService.updateTagsQuantity(tags).then(
      (res: any) => {
        if (res) {
          console.log(res)
        }
      },
      (error: any) => {
      }
    );
  }

  //function to save new bottle  quantity
  async saveBottleQuantity() {
    interface BottlePatch { quantity: number }
    var bottle: BottlePatch = {
      quantity: 0
    }

    bottle.quantity = this.newBottleQuantity

    this.warehouseService.updateBottleQuantity(bottle).then(
      (res: any) => {
        if (res) {
          console.log(res)
        }
      },
      (error: any) => {
      }
    );
  }

  //event for button save after check
  async saveChanges() {
    if (this.capsAreChanged == true) {
      this.saveCapsQuantity();

    }
    if (this.tagsAreChanged == true) {
      this.saveTagsQuantity();

    }
    if (this.bottleArechanged == true) {
      this.saveBottleQuantity();

    }

    this.button = false;
    this.getWarehouse();
  }


  setCurrentQuantities() {
    this.newCapsQuantity = this.warehouse.caps_quantity
    this.newBottleQuantity = this.warehouse.bottle_quantity
    this.newTagsQuantity = this.warehouse.tags_quantity
  }

  resetValues() {
    this.button = false;
    this.capsAreChanged = false;
    this.tagsAreChanged = false;
    this.bottleArechanged = false;
    this.contentLoaded = false;
    this.newCapsQuantity = 0;
    this.newTagsQuantity = 0;
    this.newBottleQuantity = 0;
  }
}