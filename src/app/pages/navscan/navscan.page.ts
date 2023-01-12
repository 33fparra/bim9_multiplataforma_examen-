import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-navscan',
  templateUrl: './navscan.page.html',
  styleUrls: ['./navscan.page.scss'],
})
export class NavscanPage implements OnInit {

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.create();
  }

}
