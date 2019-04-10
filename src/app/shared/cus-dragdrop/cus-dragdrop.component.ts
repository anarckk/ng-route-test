import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cus-dragdrop',
  templateUrl: './cus-dragdrop.component.html',
  styleUrls: ['./cus-dragdrop.component.css']
})
export class CusDragdropComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  allowDrop(ev) {
    console.log('allowDrop');
    ev.preventDefault();
  }

  drag(ev) {
    console.log('drag');
    ev.dataTransfer.setData("Text", ev.target.id);
  }

  drop(ev) {
    console.log('drop');
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
  }
}
