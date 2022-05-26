import TournamentsModel from '../models/TournamentsModel';
import { ITournaments } from '../interfaces/ITournaments';

class TournamentsService {
  constructor(private tournamentsModel = new TournamentsModel()) {}

  public async getAll(): Promise<ITournaments[]> {
    const tournaments = await this.tournamentsModel.getAll();
    return tournaments;
  }
}

export default TournamentsService;
