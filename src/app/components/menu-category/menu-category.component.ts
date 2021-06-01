import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.scss']
})
export class MenuCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faChevronDown = faChevronDown;
}
