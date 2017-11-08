import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openSideMenu() {
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('icon-one').style.opacity = '0';
  }

  closeSideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('icon-one').style.opacity = '1';
  }

}
