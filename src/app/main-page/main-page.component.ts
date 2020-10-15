import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Datas } from 'src/model/info';

@Component({
  selector: 'app-main-page',
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @Input()
  data:Datas;

  @Output()
  onBrowsing=new EventEmitter<Datas>();
  constructor() { }

  ngOnInit(): void {
  }

  onBrowseGallery(){
    console.log("event workingg=====");
  }
  onBrowse(data:Datas){
    console.log("custom eventss...")
    this.onBrowsing.emit(this.data);
  }
}
