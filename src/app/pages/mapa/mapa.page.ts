import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterViewInit {

  lat: number;
  lng: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let geo: any = this.route.snapshot.paramMap.get('geo');
    geo = geo.substr(4);
    geo = geo.split(',');

    this.lat = Number(geo[0]);
    this.lng = Number(geo[1]);

    console.log(this.lat, this.lng);
  }

  ngAfterViewInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibG9vc3Rzb291bCIsImEiOiJjbDU0Z2ttN3EwejJhM2J0ZDZ5MDhyNGFsIn0.BivQ2w6vgvhtBwIkaYoFbA';
    const map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-74.0066, 40.7135],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true
    });

    map.on('load', () => {
      map.resize();
      new mapboxgl.Marker({

      })
        .setLngLat([this.lng, this.lat])
        .addTo(map);

      const layers = map.getStyle().layers;

      let labelLayerId;
      for (let i = 0; i < layers.length; i++) {
        if (layers[i].type === 'simbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
        }
      }

      map.addLayer(
        {
          'id': 'add-3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
            'fill-extrusion-color': '#aaa',

            // Use an 'interpolate' expression to
            // add a smooth transition effect to
            // the buildings as the user zooms in.
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height']
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
          }
        },
        labelLayerId
      );


    });

  }

}
