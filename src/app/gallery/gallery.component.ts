import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 
import {  Datas } from 'src/model/info';

import {faBed} from '@fortawesome/free-solid-svg-icons';
import {faPlane} from '@fortawesome/free-solid-svg-icons';
import {faTicketAlt} from '@fortawesome/free-solid-svg-icons';
import {faShip} from '@fortawesome/free-solid-svg-icons';
import {faTrain} from '@fortawesome/free-solid-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  
  faBed=faBed;
  faPlane=faPlane;
  faTicketAlt=faTicketAlt;
  faShip=faShip;
  faTrain=faTrain;
  faHome=faHome;
  
  @Input()
  data:Datas;

  @Output()
  clickEvent=new EventEmitter<Datas>();


  constructor() { }

  ngOnInit(): void {
  }
  onbut(){
    console.log("event 1");
    this.clickEvent.emit(this.data);
  }

}
