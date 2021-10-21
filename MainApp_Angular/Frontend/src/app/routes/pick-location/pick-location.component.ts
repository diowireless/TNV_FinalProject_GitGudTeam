import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-pick-location',
  templateUrl: './pick-location.component.html',
  styleUrls: ['./pick-location.component.css']
})
export class PickLocationComponent implements AfterViewInit {

  lng : number;
  lat : number;
  private map;
  private popup = Leaflet.popup();

  constructor(private router : Router) {  }


  //ngOnInit(): void {
  // }
  ngAfterViewInit(): void {
    this.initMap();
   }

  onSubmit() : void {
    console.log("lng: "+this.lng+" - lat: "+this.lat);
    this.router.navigate(['/movies-by-location'], { queryParams: { lng: this.lng, lat : this.lat } });
  }

  onMapClick(e) {

    this.popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at latitude: " + e.latlng.lat + " - longitude: " + e.latlng.lng)
      .openOn(this.map);

    this.lng = e.latlng.lng;
    this.lat = e.latlng.lat;
  }

  private initMap(): void {
    this.map = Leaflet.map('map', {
      center: [ 39.215030, 9.105461 ],
      zoom: 6
    });

    const tiles = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 10,
      minZoom: 2,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);


    this.map.on('click', (e)=> {this.onMapClick(e)});
  }
}
