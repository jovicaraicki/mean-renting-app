import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemsService } from '../items.service';
import * as moment from 'moment';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  itemForm: FormGroup;
  types = [
    { id: 1, label: 'House' },
    { id: 2, label: 'Apartment' },
    { id: 3, label: 'Land' },
    { id: 4, label: 'Business' }
  ];
  available = moment();

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemForm = new FormGroup({
      type: new FormControl(null, { validators: [Validators.required] }),
      sqm: new FormControl(null, { validators: [Validators.required] }),
      surface: new FormControl(null),
      price: new FormControl(null, { validators: [Validators.required] }),
      imagePath: new FormControl(null, { validators: [Validators.required] }),
      city: new FormControl(null, { validators: [Validators.required] }),
      cityArea: new FormControl(null, { validators: [Validators.required] }),
      areaCode: new FormControl(null),
      street: new FormControl(null, { validators: [Validators.required] }),
      zipCode: new FormControl(null),
      floor: new FormControl(null),
      furnished: new FormControl(null, { validators: [Validators.required] }),
      rooms: new FormControl(null),
      bedrooms: new FormControl(null),
      beds: new FormControl(null),
      bathrooms: new FormControl(null),
      heating: new FormControl(null),
      balcony: new FormControl(null),
      duplex: new FormControl(null),
      loftApartment: new FormControl(null),
      penthouse: new FormControl(null),
      lastFloor: new FormControl(null),
      description: new FormControl(null),
      deposit: new FormControl(null),
      availableFrom: new FormControl(null, { validators: [Validators.required] }),
      cooling: new FormControl(null),
      internet: new FormControl(null),
      cableTv: new FormControl(null),
      phone: new FormControl(null),
      washingMachine: new FormControl(null),
      dishWasher: new FormControl(null),
      floorHeating: new FormControl(null),
      pantry: new FormControl(null),
      lift: new FormControl(null),
      basement: new FormControl(null),
      intercom: new FormControl(null),
      videoSurv: new FormControl(null),
      garage: new FormControl(null),
      parkingPlace: new FormControl(null),
      garden: new FormControl(null),
      pool: new FormControl(null),
    });
  }

  onSaveItem() {
    const year =  +this.itemForm.value.availableFrom.year;
    const month = +this.itemForm.value.availableFrom.month - 1;
    const day = +this.itemForm.value.availableFrom.day;
    const date = new Date(new Date(year, month, day, 3, 0).toLocaleString('en-US', {timeZone: 'Europe/Belgrade'}));
    this.itemsService.addItem(
      this.itemForm.value.type,
      this.itemForm.value.sqm,
      this.itemForm.value.surface,
      this.itemForm.value.price,
      this.itemForm.value.imagePath,
      this.itemForm.value.city,
      this.itemForm.value.cityArea,
      this.itemForm.value.areaCode,
      this.itemForm.value.street,
      this.itemForm.value.zipCode,
      this.itemForm.value.floor,
      this.itemForm.value.furnished,
      this.itemForm.value.rooms,
      this.itemForm.value.bedrooms,
      this.itemForm.value.beds,
      this.itemForm.value.bathrooms,
      this.itemForm.value.heating,
      this.itemForm.value.balcony,
      this.itemForm.value.duplex,
      this.itemForm.value.loftApartment,
      this.itemForm.value.penthouse,
      this.itemForm.value.lastFloor,
      this.itemForm.value.description,
      this.itemForm.value.deposit,
      // this.itemForm.value.availableFrom,
      date,
      this.itemForm.value.cooling,
      this.itemForm.value.internet,
      this.itemForm.value.cableTv,
      this.itemForm.value.phone,
      this.itemForm.value.washingMachine,
      this.itemForm.value.dishWasher,
      this.itemForm.value.floorHeating,
      this.itemForm.value.pantry,
      this.itemForm.value.lift,
      this.itemForm.value.basement,
      this.itemForm.value.intercom,
      this.itemForm.value.videoSurv,
      this.itemForm.value.garage,
      this.itemForm.value.parkingPlace,
      this.itemForm.value.garden,
      this.itemForm.value.pool
    );
    this.itemForm.reset();
  }
}
