import { Guid } from 'guid-typescript';

export class Result {
  id: Guid;
  matchDate: Date;
  homeTeam: string;
  homeResult: number;
  awayTeam: string;
  awayResult: number;
  scoreCode: string;
}
