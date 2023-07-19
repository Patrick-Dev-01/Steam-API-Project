import { Request, Response, Router } from 'express';
import { SteamController } from './controllers/steamController';

const routes = Router();

const steamController = new SteamController();

routes.get('/', (request: Request, response: Response) => {
    return response.status(200).send("Hello World");
});

routes.get('/apps', async (request: Request, response: Response) => {
    const data = await steamController.getGameslist();
    return response.status(200).json(data);
});

routes.get('/user_games', async (request: Request, response: Response) => {
    const { steamId } = request.query;

    if(!steamId){
        return response.status(400).json('Steam id required');
    }

    else{
        const data = await steamController.getUserGames(String(steamId));
        return response.status(200).json(data);
    }
});

routes.get('/achievements', async (request: Request, response: Response) => {
    const { gameId, steamId } = request.query;

    if(!steamId){
        return response.status(400).json('Steam id required');
    }

    if(!gameId){
        return response.status(400).json('Game id required');
    }

    else{
        const data = await steamController.getUserGameAchievements(String(gameId), String(steamId));
        return response.status(200).json(data);
    }
});

routes.get('/currentPlayers', async (request: Request, response: Response) => {
    const { gameId } = request.query;

    if(!gameId){
        return response.status(400).send('Game id required');
    }

    else {
        const data = await steamController.getCurrentGamePlayers(String(gameId));
        return response.status(200).json(data);
    }
});

export { routes };