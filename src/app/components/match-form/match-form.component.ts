import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-match-form',
  templateUrl: './match-form.component.html',
  styleUrls: ['./match-form.component.css']
})
export class MatchFormComponent implements OnInit {
  @Input() teamName: string;
  @Input() homeForm: string;
  @Input() awayForm: string;
  @Input() totalForm: string;

  constructor() { }

  ngOnInit() {}


}
