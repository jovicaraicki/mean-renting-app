import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Item } from '../item.model';
import { ItemsService } from '../items.service';
import { HttpClient } from '@angular/common/http';
import { UIService } from 'src/app/shared/ui.service';
import * as moment from 'moment';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: Item;
  id: string;
  isDataLoaded = false;
  editModeType = false;
  editModePrice = false;
  editModeDeposit = false;
  editModeSqm = false;
  editModeAvailableFrom = false;
  editModeDesc = false;
  editModeCity = false;
  editModeCityArea = false;
  editModeStreet = false;
  editModeZipCode = false;
  editModeFurnished = false;
  editModeDuplex = false;
  editModeRooms = false;
  editModeBalcony = false;
  editModeAssets = false;
  lat = 0;
  lng = 0;
  location = '22 main st Boston MA';
  key = 'AIzaSyA6kRfLsf9HpL1OtgutuAHYrxeifhpFxzw';
  iconUrl = '/assets/icons/map-marker-2-32.png';
  type: string;
  sqm: number;
  surface: number;
  price: number;
  imagePath;
  city: string;
  cityArea: string;
  areaCode: string;
  street: string;
  zipCode: string;
  floor: string;
  furnished: string;
  rooms: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  heating: string;
  balcony: number;
  duplex: boolean;
  loftApartment: boolean;
  penthouse: boolean;
  lastFloor: boolean;
  description: string;
  deposit: boolean;
  availableFrom: any;
  cooling: boolean;
  internet: boolean;
  cableTv: boolean;
  phone: boolean;
  washingMachine: boolean;
  dishWasher: boolean;
  floorHeating: boolean;
  pantry: boolean;
  lift: boolean;
  basement: boolean;
  intercom: boolean;
  videoSurv: boolean;
  garage: boolean;
  parkingPlace: boolean;
  garden: boolean;
  pool: boolean;
  creator;
  date;

  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private uiService: UIService
  ) {}

  ngOnInit() {
    this.itemsService.getItems().subscribe(item => {
      this.item = item;
    });
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.itemsService.getItem(this.id).subscribe(itemParam => {
        console.log(itemParam);
        this.type = itemParam.item.type;
        this.sqm = itemParam.item.sqm;
        this.surface = itemParam.item.surface;
        this.price = itemParam.item.price;
        this.imagePath = itemParam.item.imagePath;
        this.city = itemParam.item.city;
        this.cityArea = itemParam.item.cityArea;
        this.areaCode = itemParam.item.areaCode;
        this.street = itemParam.item.street;
        this.zipCode = itemParam.item.zipCode;
        this.floor = itemParam.item.floor;
        this.furnished = itemParam.item.furnished;
        this.rooms = itemParam.item.rooms;
        this.bedrooms = itemParam.item.bedrooms;
        this.beds = itemParam.item.beds;
        this.bathrooms = itemParam.item.bathrooms;
        this.heating = itemParam.item.heating;
        this.balcony = itemParam.item.balcony;
        this.duplex = itemParam.item.duplex;
        this.loftApartment = itemParam.item.loftApartment;
        this.penthouse = itemParam.item.penthouse;
        this.lastFloor = itemParam.item.lastFloor;
        this.description = itemParam.item.description;
        this.deposit = itemParam.item.deposit;
        const now = new Date(itemParam.item.availableFrom);
        const available = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
        this.availableFrom = available;
        this.cooling = itemParam.item.cooling;
        this.internet = itemParam.item.internet;
        this.cableTv = itemParam.item.cabelTv;
        this.phone = itemParam.item.phone;
        this.washingMachine = itemParam.item.washingMachine;
        this.dishWasher = itemParam.item.dishWasher;
        this.floorHeating = itemParam.item.floorHeating;
        this.pantry = itemParam.item.pantry;
        this.lift = itemParam.item.lift;
        this.basement = itemParam.item.basement;
        this.intercom = itemParam.item.intercom;
        this.videoSurv = itemParam.item.videoSurv;
        this.garage = itemParam.item.garage;
        this.parkingPlace = itemParam.item.parkingPlace;
        this.garden = itemParam.item.garden;
        this.pool = itemParam.item.pool;
        const city = itemParam.item.city;
        const street = itemParam.item.street;
        this.item = itemParam.item;
        this.isDataLoaded = true;
        this.location = street.concat(', ', city);
        this.http
          .get<any>(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${this.location}&key=${this.key}`
          )
          .subscribe(data => {
            this.lat = data.results[0].geometry.location.lat;
            this.lng = data.results[0].geometry.location.lng;
          });
      }, error => {
        this.router.navigate(['/']);
      });
    });
  }

  onEditType() {
    this.editModeType = true;
  }

  onEditPrice() {
    this.editModePrice = true;
  }

  onEditDeposit() {
    this.editModeDeposit = true;
  }

  onEditSqm() {
    this.editModeSqm = true;
  }

  onEditAvailableFrom() {
    this.editModeAvailableFrom = true;
  }

  onEditDesc() {
    this.editModeDesc = true;
  }

  onEditCity() {
    this.editModeCity = true;
  }

  onEditCityArea() {
    this.editModeCityArea = true;
  }

  onEditStreet() {
    this.editModeStreet = true;
  }

  onEditZipCode() {
    this.editModeZipCode = true;
  }

  onEditFurnished() {
    this.editModeFurnished = true;
  }

  onEditDuplex() {
    this.editModeDuplex = true;
  }

  onEditRooms() {
    this.editModeRooms = true;
  }

  onEditBalcony() {
    this.editModeBalcony = true;
  }

  onEditAssets() {
    this.editModeAssets = true;
  }

  onUpdate() {
    console.log(this.availableFrom.month);
    const available = new Date(this.availableFrom.year, this.availableFrom.month - 1, this.availableFrom.day);
    console.log('available: ', available);
    this.itemsService.updateItem(
      this.id,
      this.type,
      this.sqm,
      this.surface,
      this.price,
      this.imagePath,
      this.city,
      this.cityArea,
      this.areaCode,
      this.street,
      this.zipCode,
      this.floor,
      this.furnished,
      this.rooms,
      this.bedrooms,
      this.beds,
      this.bathrooms,
      this.heating,
      this.balcony,
      this.duplex,
      this.loftApartment,
      this.penthouse,
      this.lastFloor,
      this.description,
      this.deposit,
      available,
      this.cooling,
      this.internet,
      this.cableTv,
      this.phone,
      this.washingMachine,
      this.dishWasher,
      this.floorHeating,
      this.pantry,
      this.lift,
      this.basement,
      this.intercom,
      this.videoSurv,
      this.garage,
      this.parkingPlace,
      this.garden,
      this.pool,
      this.creator,
      this.date
    );
    this.editModeType = false;
    this.editModeSqm = false;
    this.editModeDesc = false;
    this.editModeCity = false;
    this.editModeCityArea = false;
    this.editModeStreet = false;
    this.editModeFurnished = false;
    this.editModeRooms = false;
    this.editModeAssets = false;
    // this.item.type = '';
    this.itemsService.itemUpdated.subscribe(item => {
      console.log('items: ', item);
      this.item.type = item.type;
      this.item.sqm = item.sqm;
      this.item.surface = item.surface;
      this.item.price = item.price;
      this.item.imagePath = item.imagePath;
      this.item.city = item.city;
      this.item.cityArea = item.cityArea;
      this.item.areaCode = item.areaCode;
      this.item.street = item.street;
      this.item.zipCode = item.zipCode;
      this.item.floor = item.floor;
      this.item.furnished = item.furnished;
      this.item.rooms = item.rooms;
      this.item.bedrooms = item.bedrooms;
      this.item.beds = item.beds;
      this.item.bathrooms = item.bathrooms;
      this.item.heating = item.heating;
      this.item.balcony = item.balcony;
      this.item.duplex = item.duplex;
      this.item.loftApartment = item.loftApartment;
      this.item.penthouse = item.penthouse;
      this.item.lastFloor = item.lastFloor;
      this.item.description = item.description;
      this.item.deposit = item.deposit;
      const date = new Date(new Date(available).toLocaleString('en-US', {timeZone: 'Europe/Belgrade'}));
      this.item.availableFrom = date;
      this.item.cooling = item.cooling;
      this.item.internet = item.internet;
      this.item.cableTv = item.cableTv;
      this.item.phone = item.phone;
      this.item.washingMachine = item.washingMachine;
      this.item.dishWasher = item.dishWasher;
      this.item.floorHeating = item.floorHeating;
      this.item.pantry = item.pantry;
      this.item.lift = item.lift;
      this.item.basement = item.basement;
      this.item.intercom = item.intercom;
      this.item.videoSurv = item.videoSurv;
      this.item.garage = item.garage;
      this.item.parkingPlace = item.parkingPlace;
      this.item.garden = item.garden;
      this.item.pool = item.pool;
    }, error => {
      this.router.navigate(['/']);
    });
    // this.itemsService.typeUpdated.subscribe(type => {
    //   // console.log('type: ', type);
    //   this.type = type;
    // });
    // this.itemsService.sqmUpdated.subscribe(sqm => {
    //   // console.log('type: ', type);
    //   this.sqm = sqm;
    // });
  }

  onCancelType() {
    this.editModeType = false;
  }

  onCancelPrice() {
    this.editModePrice = false;
  }

  onCancelDeposit() {
    this.editModeDeposit = false;
  }

  onCancelSqm() {
    this.editModeSqm = false;
  }

  onCancelAvailableFrom() {
    this.editModeAvailableFrom = false;
  }

  onCancelDesc() {
    this.editModeDesc = false;
  }

  onCancelCity() {
    this.editModeCity = false;
  }

  onCancelCityArea() {
    this.editModeCityArea = false;
  }

  onCancelStreet() {
    this.editModeStreet = false;
  }

  onCancelZipCode() {
    this.editModeZipCode = false;
  }

  onCancelFurnished() {
    this.editModeFurnished = false;
  }

  onCancelDuplex() {
    this.editModeDuplex = false;
  }

  onCancelRooms() {
    this.editModeRooms = false;
  }

  onCancelBalcony() {
    this.editModeBalcony = false;
  }

  onCancelAssets() {
    this.editModeAssets = false;
  }

}
