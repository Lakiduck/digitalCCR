import { Component, OnInit } from '@angular/core';
import { ExtractinfoService } from '../extractinfo.service';
import {animate, state, style, transition, trigger} from '@angular/animations';



@Component({
  selector: 'app-displayinfo',
  templateUrl: './displayinfo.component.html',
  styleUrls: ['./displayinfo.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DisplayinfoComponent implements OnInit {
//characters: any[];
//columns: string[];



dataSource: any[];  // = ELEMENT_DATA;
sideeffects: any[];

displayedColumns = ['position', 'name', 'weight', 'symbol'];
displayedColumnsSideEffects : string[] = ["No.", "Name", "Frequency"];

constructor(private _extractinfo: ExtractinfoService) {
    
   }

  ngOnInit() {
  //  this.columns = this._extractinfo.getColumns(); 
  //["name", "age", "species", "occupation"]  this.characters = this.atService.getCharacters();
  //all data in mock-data.ts
  // this.characters = this._extractinfo.getCharacters();
  
  this.dataSource = this._extractinfo.getCharacters();
  this.sideeffects = this._extractinfo.getSideeffectsData();

  }
}
