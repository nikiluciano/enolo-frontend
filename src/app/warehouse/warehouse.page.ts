import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../services/warehouse.service';
import { IonList, MenuController, PickerController } from '@ionic/angular';
import { ToastService } from '../services/toast.service';

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

  modifyButtonsValues = [];
  cancelButtonValues = [];

  newBottlesQuantity = [];

  modifyBtnCaps = true;
  cancelBtnCaps = false;

  modifyBtnTags = true;
  cancelBtnTags = false;

  private selectedNumber: number;



  constructor(public warehouseService: WarehouseService,
    public menu: MenuController,
    private toast: ToastService) { }

  ionViewDidEnter(): void {
    this.menu.enable(true);
  }


  ngOnInit() {


    this.getWarehouse();
  }

  doRefresh(event) {
    this.getWarehouse();
    this.resetValues();
    setTimeout(() => {
      event.target.complete()
    }, 2000);

  }


  async getWarehouse() {

    this.resetValues();
    await this.warehouseService.getWarehouse().then(
      (res: any) => {
        if (res) {

          this.contentLoaded = true
          this.warehouse = res
          this.currentBottle = this.warehouse.bottle_quantity
          this.generateModifyAndCancelBtns()
        } else {
        }
      })
  }


  slideOpts = {
    slidesPerView: 3,
    centerSlide: true,
    loop: false,
  }

  /**
   * generates buttons when a user attempts to refill the warehouse
  */
  generateModifyAndCancelBtns() {
    this.warehouse.bottles.formats.forEach(element => {
      this.modifyButtonsValues.push(true);
      this.cancelButtonValues.push(false);
      this.newBottlesQuantity.push(0)
    });


  }


  async change() {
    this.button = true;
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
    this.modifyButtonsValues = [];
    this.cancelButtonValues = [];
    this.newBottlesQuantity = [];
  }


  setModifyThis(i: number) {
    this.cancelButtonValues[i] = true;
    this.modifyButtonsValues[i] = false;


  }


  cancelAction(i: number) {
    this.cancelButtonValues[i] = false;
    this.modifyButtonsValues[i] = true;


  }

  setModifyCaps() {
    this.modifyBtnCaps = false;
    this.cancelBtnCaps = true;

  }

  cancelActionCaps() {

    this.modifyBtnCaps = true;
    this.cancelBtnCaps = false;
  }


  setModifyTags() {
    this.modifyBtnTags = false;
    this.cancelBtnTags = true;

  }

  cancelActionTags() {

    this.modifyBtnTags = true;
    this.cancelBtnTags = false;
  }


  /**
   * make a request to the server to patch the bottles quantity
   * @param bottle ex:   {
    *            "format": "0.75L",
    *            "quantity": 55,
    *            "description": "3 quarter format"
    *        }
   * @param i index of the bottle quantity to be refilled in the warehouse
   */
  patchTheBottle(bottle: any, i: number) {
    console.log(JSON.stringify(bottle))
    if (this.newBottlesQuantity[i] <= 0) {
      this.toast.presentToast("Aggiungi una quantità valida!")
    } else {
      let patchData = {
        format: bottle.format,
        quantity: this.newBottlesQuantity[i]
      }

      this.warehouseService.updateBottleFormat(patchData)
        .then(res => {
          this.toast.presentToast("Bottiglie aggiunte con successo!")
          this.getWarehouse()

        })
        .catch(err => {
          this.toast.presentToast(err.msg)
        })
    }
  }


/**
 * make a request to the server to patch the caps quantity
 */
  patchTheCaps() {
    let patchData = {
      quantity: this.newCapsQuantity

    }
    if (this.newCapsQuantity <= 0) {
      this.toast.presentToast("Aggiungi una quantità valida!")

    } else {
      this.warehouseService.updateCapsQuantity(patchData)
        .then(res => {
          this.toast.presentToast("Tappi aggiunti con successo!")
          this.getWarehouse()

        })
        .catch(err => {
          this.toast.presentToast(err.msg)

        })
    }


  }

  /**
 * make a request to the server to patch the tags quantity
 */
  patchTheTags() {
    let patchData = {
      quantity: this.newTagsQuantity
    }

    if (this.newTagsQuantity <= 0) {
      this.toast.presentToast("Aggiungi una quantità valida!")

    } else {
      this.warehouseService.updateTagsQuantity(patchData)
        .then(res => {
          this.toast.presentToast("Etichette aggiunte con successo!")
          this.getWarehouse()
        })
        .catch(err => {
          this.toast.presentToast(err.msg)

        })

    }

  }

  
  exitWarehousePatches() {
    this.button = false

  }
}