import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Result } from '../../models/Result';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.css']
})
export class AddResultComponent implements OnInit {

  constructor() { }
  @Output() addResult: EventEmitter<any> = new EventEmitter();
  id: Guid;
  matchDate: Date;
  homeTeam: string;
  homeResult: number;
  awayTeam: string;
  awayResult: number;
  scoreCode: string;

  ngOnInit() {
  }

  onSubmit() {
    const result = {
      id: this.id,
      matchDate: new Date(this.matchDate),
      homeTeam: this.homeTeam,
      homeResult: this.homeResult,
      awayTeam: this.awayTeam,
      awayResult: this.awayResult,
      scoreCode: ''
    };
    result.scoreCode = this.getScoreCode(result, 'West Brom');
    this.addResult.emit(result);
    // Clear down form after submit
    this.matchDate = null;
    this.homeTeam = '';
    this.homeResult = null;
    this.awayTeam = '';
    this.awayResult = null;
  }


  getScoreCode(result: Result, team: string): string {
    if ( result.homeResult === result.awayResult ) {
      return 'D';
    } else {
      if (team === result.homeTeam) {
        if (result.homeResult > result.awayResult) {
          return 'W';
        } else {
          return 'L';
        }
      } else {
        if (result.homeResult < result.awayResult) {
          return 'W';
        } else {
          return 'L';
        }
      }
    }
  }

}
