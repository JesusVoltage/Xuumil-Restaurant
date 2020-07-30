import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, AUTO_STYLE } from '@angular/animations';

@Component({
  selector: 'app-home',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({height: 0 , opacity: 0}),
          animate('200ms', style({ height: AUTO_STYLE}))
        ]),
        transition(':leave', [
          style({height: AUTO_STYLE, opacity: 0}),
          animate('200ms', style({height: 0}))

        ])
      ]
    )
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  vermas: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


}
