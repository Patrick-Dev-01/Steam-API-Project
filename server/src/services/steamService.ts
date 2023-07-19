import { steam } from "../config/steam";
import { Apps, UserGames, UserGameAchievement, CurrentGamePlayers } from "../types/steamTypes";

export class SteamService{
    async getGamesList(){
        let apps: Apps[] = [];
        await steam.get(`/ISteamApps/GetAppList/v0002/?key=${process.env.STEAM_API_KEY}&format=json`)
        .then(resp => {
            const response: Apps[] = resp.data.applist.apps;
            apps = response.filter(app => app.name !== '');
        }).catch(err => {
            console.log(err);
        });

        return apps;
    }

    async getUserGames(steamId: string){
        let userGames: UserGames[] = [];
        await steam.get(`/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${steamId}&format=json`)
        .then(resp => {
            userGames = resp.data.response;
        }).catch(err => {
            console.log(err);
        });

        return userGames;
    }

    async getUserGameAchievements(gameId: string, steamId: string){
        let userGameAchievements: UserGameAchievement[] = [];

        await steam.get(`/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${gameId}&key=${process.env.STEAM_API_KEY}&steamid=${steamId}`)
        .then(response => {
            userGameAchievements = response.data.playerStats;
        }).catch(err => {
            console.log(err);
        });

        return userGameAchievements;
    }

    async getGameCurrentPlayers(gameId: string){
        let currentGamePlayers: CurrentGamePlayers[] = [];

        await steam.get(`/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${gameId}`)
        .then(response => {
           currentGamePlayers = response.data.response;
        }).catch(err => {
            console.log(err);
        });
    }
}