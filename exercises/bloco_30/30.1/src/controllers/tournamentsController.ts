import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import TournamentsService from '../services/TournamentsService';

class TournamentsController {
  notFound = 'Book not found';
  internalError = 'Internal server error';
  constructor(private tournamentsService = new TournamentsService()) {}

  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    try {
      const tournaments = await this.tournamentsService.getAll();
      return res.status(StatusCodes.OK).json(tournaments);
    } catch (err: unknown) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: this.internalError,
      });
    }
  }
}

export default TournamentsController;
