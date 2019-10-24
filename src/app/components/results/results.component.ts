import { Component, Input, OnInit } from '@angular/core';
import { ResultService } from '../../services/result.service';
import { Result } from '../../models/Result';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results: Result[];
  teamName: string;
  homeForm: string;
  awayForm: string;
  totalForm: string;

  constructor(private resultService: ResultService) { }

  ngOnInit() {
    this.resultService.initResults();
    this.results = this.resultService.results;
    this.teamName = 'West Brom';
    this.refreshMatchForm();
  }

  private getTime(date?: Date) {
    return date != null ? new Date(date).getTime() : 0;
  }

  refreshMatchForm() {
    this.homeForm = this.getHomeForm(this.results, this.teamName);
    this.awayForm = this.getAwayForm(this.results, this.teamName);
    this.totalForm = this.getTotalForm(this.results, this.teamName);
  }

  deleteResult(result: Result) {
    this.resultService.results = this.resultService.results.filter(t => t.id !== result.id);
    this.results = this.resultService.results;
    this.refreshMatchForm();
  }

  addResult(result: Result) {
    result.id = Guid.create();
    this.resultService.results.push(result);
    this.resultService.results.sort((a: Result, b: Result) => this.getTime(b.matchDate) - this.getTime(a.matchDate));
    this.results = this.resultService.results;
    this.refreshMatchForm();
  }

  private getHomeForm(results: Result[], teamname: string) {
    let codeString = '';
    for (let result of results) {
      if (result.homeTeam === teamname) {
        codeString = codeString + result.scoreCode;
      }
    }
    return codeString;
  }

  private getAwayForm(results: Result[], teamname: string) {
    let codeString = '';
    for (let result of results) {
      if (result.awayTeam === teamname) {
        codeString = codeString + result.scoreCode;
      }
    }
    return codeString;
  }

  private getTotalForm(results: Result[], teamname: string) {
    let codeString = '';
    for (let result of results) {
      if (result.homeTeam === teamname || result.awayTeam === teamname) {
        codeString = codeString + result.scoreCode;
      }
    }
    return codeString;
  }

}
