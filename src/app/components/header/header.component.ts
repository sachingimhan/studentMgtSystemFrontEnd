import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output('isOPend') isOpend = new EventEmitter();

  constructor(

  ) { }

  openSide() {
    let data = false;
    this.isOpend.emit(data);
  }

  ngOnInit(): void {
    this.openSide();
  }

}
