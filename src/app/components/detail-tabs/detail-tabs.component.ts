import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/model';

@Component({
  selector: 'app-detail-tabs',
  templateUrl: './detail-tabs.component.html',
  styleUrls: ['./detail-tabs.component.scss']
})
export class DetailTabsComponent implements OnInit {
  @Input()
  game!: Game;

  constructor() { }

  ngOnInit(): void {
  }

}
