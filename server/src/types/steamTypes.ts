export interface Apps{
    appid: number;
    name: string;
}

export interface Achievements{
    apiname: string;
    achieved: number;
    unlocktime: number;
}

export interface UserGameAchievement{
    steamID: string;
    gameName: string;
    achivements: Achievements[];
}

export interface Games {
    appid: number;
    playtime_forever: number;
    playtime_windows_forever: number;
    playtime_mac_forever: number;
    playtime_linux_forever: number;
    rtime_last_played: number;
    playtime_disconnected: number;
}

export interface UserGames{
    game_count: number;
    games: Games[];
}

export interface CurrentGamePlayers{
    player_count: number;
    result: number;
}
