import { Component, OnInit } from '@angular/core';
import { faUser, faCommentDots, faStore, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-widgets-header',
  templateUrl: './widgets-header.component.html',
  styleUrls: ['./widgets-header.component.scss']
})
export class WidgetsHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faUser = faUser;
  faCommentDots = faCommentDots;
  faStore = faStore;
  faShoppingCart = faShoppingCart;

}
