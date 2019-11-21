import { Item } from './item.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

export class ItemsService {
  items: Item[] = [];
  itemId = new Subject<string>();
  itemsUpdated = new Subject<any>();
  itemUpdated = new Subject<any>();

  typeUpdated = new Subject<string>();
  sqmUpdated = new Subject<number>();
  surfaceUpdated = new Subject<number>();
  priceUpdated = new Subject<number>();
  imagePathUpdated = new Subject<string>();
  cityUpdated = new Subject<string>();
  cityAreaUpdated = new Subject<string>();
  areaCodeUpdated = new Subject<string>();
  streetUpdated = new Subject<string>();
  zipCodeUpdated = new Subject<string>();
  floorUpdated = new Subject<string>();
  furnishedUpdated = new Subject<string>();
  roomsUpdated = new Subject<number>();
  bedroomsUpdated = new Subject<number>();
  bedsUpdated = new Subject<number>();
  bathroomsUpdated = new Subject<number>();
  heatingUpdated = new Subject<string>();
  balconyUpdated = new Subject<number>();
  duplexUpdated = new Subject<boolean>();
  loftApartmentUpdated = new Subject<boolean>();
  penthouseUpdated = new Subject<boolean>();
  lastFloorUpdated = new Subject<boolean>();
  descriptionUpdated = new Subject<string>();
  depositUpdated = new Subject<boolean>();
  availableFromUpdated = new Subject<Date>();
  coolingUpdated = new Subject<boolean>();
  internetUpdated = new Subject<boolean>();
  cableTvUpdated = new Subject<boolean>();
  phoneUpdated = new Subject<boolean>();
  washingMachineUpdated = new Subject<boolean>();
  dishWasherUpdated = new Subject<boolean>();
  floorHeatingUpdated = new Subject<boolean>();
  pantryUpdated = new Subject<boolean>();
  liftUpdated = new Subject<boolean>();
  basementUpdated = new Subject<boolean>();
  intercomUpdated = new Subject<boolean>();
  videoSurvUpdated = new Subject<boolean>();
  garageUpdated = new Subject<boolean>();
  parkingPlaceUpdated = new Subject<boolean>();
  gardenUpdated = new Subject<boolean>();
  poolUpdated = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  addItem(
    type: string,
    sqm: number,
    surface: number,
    price: number,
    imagePath: string,
    city: string,
    cityArea: string,
    areaCode: string,
    street: string,
    zipCode: string,
    floor: string,
    furnished: string,
    rooms: number,
    bedrooms: number,
    beds: number,
    bathrooms: number,
    heating: string,
    balcony: number,
    duplex: boolean,
    loftApartment: boolean,
    penthouse: boolean,
    lastFloor: boolean,
    description: string,
    deposit: boolean,
    availableFrom: Date,
    cooling: boolean,
    internet: boolean,
    cableTv: boolean,
    phone: boolean,
    washingMachine: boolean,
    dishWasher: boolean,
    floorHeating: boolean,
    pantry: boolean,
    lift: boolean,
    basement: boolean,
    intercom: boolean,
    videoSurv: boolean,
    garage: boolean,
    parkingPlace: boolean,
    garden: boolean,
    pool: boolean
  ) {
      const item = {
        type,
        sqm,
        surface,
        price,
        imagePath,
        city,
        cityArea,
        areaCode,
        street,
        zipCode,
        floor,
        furnished,
        rooms,
        bedrooms,
        beds,
        bathrooms,
        heating,
        balcony,
        duplex,
        loftApartment,
        penthouse,
        lastFloor,
        description,
        deposit,
        availableFrom,
        cooling,
        internet,
        cableTv,
        phone,
        washingMachine,
        dishWasher,
        floorHeating,
        pantry,
        lift,
        basement,
        intercom,
        videoSurv,
        garage,
        parkingPlace,
        garden,
        pool
    };
      this.http.post<{ message: string, post: any }>(environment.apiUrl + '/items', item)
        .subscribe(responseData => {
          console.log(responseData);
          console.log(item);
          this.router.navigate(['/']);
        });
  }

  getItems() {
    return this.http.get<{ items: any }>(environment.apiUrl + '/items')
    .pipe(map((postData) => {
      this.items = postData.items;
      console.log(this.items);
      return postData.items;
    }));
  }

  getItem(id: string) {
    return this.http.get<{ id: string, item: any }>(environment.apiUrl + '/items/edit/' + id);
  }

  updateItem(
    id: string,
    type: string,
    sqm: number,
    surface: number,
    price: number,
    imagePath: string,
    city: string,
    cityArea: string,
    areaCode: string,
    street: string,
    zipCode: string,
    floor: string,
    furnished: string,
    rooms: number,
    bedrooms: number,
    beds: number,
    bathrooms: number,
    heating: string,
    balcony: number,
    duplex: boolean,
    loftApartment: boolean,
    penthouse: boolean,
    lastFloor: boolean,
    description: string,
    deposit: boolean,
    availableFrom: Date,
    cooling: boolean,
    internet: boolean,
    cableTv: boolean,
    phone: boolean,
    washingMachine: boolean,
    dishWasher: boolean,
    floorHeating: boolean,
    pantry: boolean,
    lift: boolean,
    basement: boolean,
    intercom: boolean,
    videoSurv: boolean,
    garage: boolean,
    parkingPlace: boolean,
    garden: boolean,
    pool: boolean,
    creator: string,
    date: Date
  ) {
    const item = {
      id,
      type,
      sqm,
      surface,
      price,
      imagePath,
      city,
      cityArea,
      areaCode,
      street,
      zipCode,
      floor,
      furnished,
      rooms,
      bedrooms,
      beds,
      bathrooms,
      heating,
      balcony,
      duplex,
      loftApartment,
      penthouse,
      lastFloor,
      description,
      deposit,
      availableFrom,
      cooling,
      internet,
      cableTv,
      phone,
      washingMachine,
      dishWasher,
      floorHeating,
      pantry,
      lift,
      basement,
      intercom,
      videoSurv,
      garage,
      parkingPlace,
      garden,
      pool,
      creator,
      date
    };
    this.http.patch(environment.apiUrl + '/items/' + id, item)
      .subscribe(response => {
        const oldItems = [...this.items];
        console.log(oldItems);
        const oldItemIndex = oldItems.findIndex(p => p._id === id);
        console.log(oldItemIndex);

        const typeNew = type;
        oldItems[oldItemIndex].type = typeNew;
        this.typeUpdated.next(typeNew);

        const sqmNew = sqm;
        oldItems[oldItemIndex].sqm = sqmNew;
        this.sqmUpdated.next(sqmNew);

        const surfaceNew = surface;
        oldItems[oldItemIndex].surface = surfaceNew;
        this.surfaceUpdated.next(surfaceNew);

        const priceNew = price;
        oldItems[oldItemIndex].price = priceNew;
        this.priceUpdated.next(priceNew);

        const imagePathNew = imagePath;
        oldItems[oldItemIndex].imagePath = imagePathNew;
        this.imagePathUpdated.next(imagePathNew);

        const cityNew = city;
        oldItems[oldItemIndex].city = cityNew;
        this.cityUpdated.next(cityNew);

        const cityAreaNew = cityArea;
        oldItems[oldItemIndex].cityArea = cityAreaNew;
        this.cityAreaUpdated.next(cityAreaNew);

        const areaCodeNew = areaCode;
        oldItems[oldItemIndex].areaCode = areaCodeNew;
        this.areaCodeUpdated.next(areaCodeNew);

        const streetNew = street;
        oldItems[oldItemIndex].street = streetNew;
        this.streetUpdated.next(streetNew);

        const zipCodeNew = zipCode;
        oldItems[oldItemIndex].zipCode = zipCodeNew;
        this.zipCodeUpdated.next(zipCodeNew);

        const floorNew = floor;
        oldItems[oldItemIndex].floor = floorNew;
        this.floorUpdated.next(floorNew);

        const furnishedNew = furnished;
        oldItems[oldItemIndex].furnished = furnishedNew;
        this.furnishedUpdated.next(furnishedNew);

        const roomsNew = rooms;
        oldItems[oldItemIndex].rooms = roomsNew;
        this.roomsUpdated.next(roomsNew);

        const bedroomsNew = bedrooms;
        oldItems[oldItemIndex].bedrooms = bedroomsNew;
        this.bedroomsUpdated.next(bedroomsNew);

        const bedsNew = beds;
        oldItems[oldItemIndex].beds = bedsNew;
        this.bedsUpdated.next(bedsNew);

        const bathroomsNew = bathrooms;
        oldItems[oldItemIndex].bathrooms = bathroomsNew;
        this.bathroomsUpdated.next(bathroomsNew);

        const heatingNew = heating;
        oldItems[oldItemIndex].heating = heatingNew;
        this.heatingUpdated.next(heatingNew);

        const balconyNew = balcony;
        oldItems[oldItemIndex].balcony = balconyNew;
        this.balconyUpdated.next(balconyNew);

        const duplexNew = duplex;
        oldItems[oldItemIndex].duplex = duplexNew;
        this.duplexUpdated.next(duplexNew);

        const loftApartmentNew = loftApartment;
        oldItems[oldItemIndex].loftApartment = loftApartmentNew;
        this.loftApartmentUpdated.next(loftApartmentNew);

        const penthouseNew = penthouse;
        oldItems[oldItemIndex].penthouse = penthouseNew;
        this.penthouseUpdated.next(penthouseNew);

        const lastFloorNew = lastFloor;
        oldItems[oldItemIndex].lastFloor = lastFloorNew;
        this.lastFloorUpdated.next(lastFloorNew);

        const descriptionNew = description;
        oldItems[oldItemIndex].description = descriptionNew;
        this.descriptionUpdated.next(descriptionNew);

        const depositNew = deposit;
        oldItems[oldItemIndex].deposit = depositNew;
        this.depositUpdated.next(depositNew);

        const availableFromNew = availableFrom;
        oldItems[oldItemIndex].availableFrom = availableFromNew;
        this.availableFromUpdated.next(availableFromNew);

        const coolingNew = cooling;
        oldItems[oldItemIndex].cooling = coolingNew;
        this.coolingUpdated.next(coolingNew);

        const internetNew = internet;
        oldItems[oldItemIndex].internet = internetNew;
        this.internetUpdated.next(internetNew);

        const cableTvNew = cableTv;
        oldItems[oldItemIndex].cableTv = cableTvNew;
        this.cableTvUpdated.next(cableTvNew);

        const phoneNew = phone;
        oldItems[oldItemIndex].phone = phoneNew;
        this.phoneUpdated.next(phoneNew);

        const washingMachineNew = washingMachine;
        oldItems[oldItemIndex].washingMachine = washingMachineNew;
        this.washingMachineUpdated.next(washingMachineNew);

        const dishWasherNew = dishWasher;
        oldItems[oldItemIndex].dishWasher = dishWasherNew;
        this.dishWasherUpdated.next(dishWasherNew);

        const floorHeatingNew = floorHeating;
        oldItems[oldItemIndex].floorHeating = floorHeatingNew;
        this.floorHeatingUpdated.next(floorHeatingNew);

        const pantryNew = pantry;
        oldItems[oldItemIndex].pantry = pantryNew;
        this.pantryUpdated.next(pantryNew);

        const liftNew = lift;
        oldItems[oldItemIndex].lift = liftNew;
        this.liftUpdated.next(liftNew);

        const basementNew = basement;
        oldItems[oldItemIndex].basement = basementNew;
        this.basementUpdated.next(basementNew);

        const intercomNew = intercom;
        oldItems[oldItemIndex].intercom = intercomNew;
        this.intercomUpdated.next(intercomNew);

        const videoSurvNew = videoSurv;
        oldItems[oldItemIndex].videoSurv = videoSurvNew;
        this.videoSurvUpdated.next(videoSurvNew);

        const garageNew = garage;
        oldItems[oldItemIndex].garage = garageNew;
        this.garageUpdated.next(garageNew);

        const parkingPlaceNew = parkingPlace;
        oldItems[oldItemIndex].parkingPlace = parkingPlaceNew;
        this.parkingPlaceUpdated.next(parkingPlaceNew);

        const gardenNew = garden;
        oldItems[oldItemIndex].garden = gardenNew;
        this.gardenUpdated.next(gardenNew);

        const poolNew = pool;
        oldItems[oldItemIndex].pool = poolNew;
        this.poolUpdated.next(poolNew);

        const updatedItems = [...this.items];
        const newItemIndex = updatedItems.findIndex(p => p._id === id);
        this.itemUpdated.next(updatedItems[newItemIndex]);
        this.itemsUpdated.next(updatedItems);
        // this.router.navigate(['/']);
      }, error => {
        this.router.navigate(['/']);
      });
  }

}
