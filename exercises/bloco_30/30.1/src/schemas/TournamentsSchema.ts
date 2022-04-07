import { Schema } from 'mongoose';
import { ITournaments } from '../interfaces/ITournaments';

export const TournamentsSchema = new Schema<ITournaments>({
  year: Number,
  hostCountry: String,
  champions: String,
  runnerUp: String,
  editionGoals: Number,
  editionStrikers: String,
  bestPlayer: String,
  bestGoalkeeper: String,
  bestYoungPlayer: String,
}, { versionKey: false });