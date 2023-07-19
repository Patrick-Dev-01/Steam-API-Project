import { SteamService } from "../services/steamService"

export class SteamController{
    private steamService = new SteamService();

    async getGameslist(){
        const apps = await this.steamService.getGamesList();
        return apps;
    }

    async getUserGames(steamId: string){
        const userGames = await this.steamService.getUserGames(steamId);
        return userGames;
    }

    async getUserGameAchievements(gameId: string, steamId: string){
        const userGamesAchievements = await this.steamService.getUserGameAchievements(gameId, steamId);
        return userGamesAchievements;
    }

    async getCurrentGamePlayers(gameId: string){
        const currentGamePlayers = await this.steamService.getGameCurrentPlayers(gameId);
        return currentGamePlayers;
    }
}