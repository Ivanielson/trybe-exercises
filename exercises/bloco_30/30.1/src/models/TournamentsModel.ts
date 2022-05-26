import { model as createModel } from 'mongoose';
import { TournamentsSchema } from '../schemas/TournamentsSchema';
import { ITournaments } from '../interfaces/ITournaments';

class TournamentsModel {
  constructor(private tournamentsModel = createModel('tournaments', TournamentsSchema)) {}

  public async getAll(): Promise<ITournaments[]> {
    const tournaments = await this.tournamentsModel.find();
    return tournaments;
  }
}

export default TournamentsModel;
