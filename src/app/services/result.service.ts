import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Result } from '../models/Result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  results: Result[];

  constructor() { }

  initResults() {
    this.results = this.getResults().sort((a: Result, b: Result) => {
      return this.getTime(b.matchDate) - this.getTime(a.matchDate);
    });
  }

  private getTime(date?: Date) {
    return date != null ? new Date(date).getTime() : 0;
  }

  getResults() {
    return [
      {
        id: Guid.create(),
        matchDate: new  Date ('2018-12-08'),
        homeTeam: 'Wolves',
        homeResult: 0,
        awayTeam: 'West Brom',
        awayResult: 3,
        scoreCode: 'W'
      },
      {
        id: Guid.create(),
        matchDate: new  Date ('2018-12-01'),
        homeTeam: 'Tamworth',
        homeResult: 1,
        awayTeam: 'West Brom',
        awayResult: 0,
        scoreCode: 'L'
      },
      {
        id: Guid.create(),
        matchDate: new  Date ('2018-12-29'),
        homeTeam: 'West Brom',
        homeResult: 2,
        awayTeam: 'Man Utd',
        awayResult: 0,
        scoreCode: 'W'
      },
      {
        id: Guid.create(),
        matchDate: new  Date ('2018-12-22'),
        homeTeam: 'Burton',
        homeResult: 2,
        awayTeam: 'West Brom',
        awayResult: 2,
        scoreCode: 'D'
      },
      {
        id: Guid.create(),
        matchDate: new  Date ('2018-12-15'),
        homeTeam: 'West Brom',
        homeResult: 1,
        awayTeam: 'Gillingham',
        awayResult: 1,
        scoreCode: 'D'
      }
    ];
  }
}
