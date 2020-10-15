import { Component, OnInit } from '@angular/core';
//importing for icons
import {faBed} from '@fortawesome/free-solid-svg-icons';
import {faPlane} from '@fortawesome/free-solid-svg-icons';
import {faTicketAlt} from '@fortawesome/free-solid-svg-icons';
import {faShip} from '@fortawesome/free-solid-svg-icons';
import {faTrain} from '@fortawesome/free-solid-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';

//imorting for using the data for htnl from db-data.ts
import {DATA} from '../../db-data';

//for animations of divisions
import * as Aos from 'aos';
import { Datas } from 'src/model/info';



@Component({
  selector: 'app-services',
  templateUrl: 'services.component.html',
  styleUrls: ['services.component.css']
})
export class ServicesComponent implements OnInit {

  //for using icons
  faBed=faBed;
  faPlane=faPlane;
  faTicketAlt=faTicketAlt;
  faShip=faShip;
  faTrain=faTrain;
  faHome=faHome;

  //making data availabale for this template
  one=DATA[0];
  two=DATA[1];
  three=DATA[2];
  four=DATA[3];
  five=DATA[4];
  six=DATA[5];

  list=DATA;

  constructor() { }

  ngOnInit(): void {
    //initialisation of animations
    Aos.init();
  }
  ondata(){
 console.log("heloo man.....");
  }
  onClick(data:Datas){
    console.log("cutoms evvent",data);

  }


  onBrowseGalleri(){
    console.log("event workingg=====");
  }
}
