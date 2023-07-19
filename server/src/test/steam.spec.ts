import request from 'supertest';
import { app } from '../app';
import { it, expect, describe } from 'vitest';
import { Apps } from '../types/steamTypes';

describe('Steam routes and responses Validation', () => {    
    // "/apps"
    it('Should filter empty app names', () => {
        const apps: Apps[] = [
            {
                appid: 0,
                name: 'Game 1'
            },
            {
                appid: 1,
                name: ""
            },
            {
                appid: 2,
                name: ""
            },
        ];
        const expectedFilter: Apps[] = [{ appid: 0, name: 'Game 1'}];

        const appsFiltered = apps.filter(app => app.name !== "");
        expect(appsFiltered).to.eql(expectedFilter);
    });

    // "/user_games" Route
    it('Should return a status code 400 if steam Id is empty in "/games" ', async () => {
        const steamId = '';
        const response = await request(app).get('/user_games').query({ steamId: steamId });
    
        expect(response.status).toBe(400);
    });

    it('Should return a text "Steam Id Required" if steam Id is empty in "/games" ', async () => {
        const steamId = '';
        const response = await request(app).get('/user_games').query({ steamId: steamId });
    
        expect(response.text).string("Steam id required");
    });

    // "/achievements" Route
    it('Should return a status code 400 if "steamId" is empty in "/achievements" ', async () => {
        const steamId = '';
        const gameId = '';
        const response = await request(app).get('/achievements').query({ steamId: steamId, gameId: gameId });
    
        expect(response.status).toBe(400);
    });

    it('Should return a status code 400 if "GameId" is empty in "/achievements" ', async () => {
        const steamId = '000000000001';
        const gameId = '';
        const response = await request(app).get('/achievements').query({ steamId: steamId, gameId: gameId });
    
        expect(response.status).toBe(400);
    });

    it('Should return a text "Game id Required" if "gameId" is empty in "/achievements" ', async () => {
        const steamId = '000000000001';
        const gameId = '';
        const response = await request(app).get('/achievements').query({ steamId: steamId, gameId: gameId });
    
        expect(response.text).string("Game id required");
    });

    it('Should return a status code 400 if "steamId" is empty in "/achievements" ', async () => {
        const steamId = '';
        const gameId = '000000000001';
        const response = await request(app).get('/achievements').query({ steamId: steamId, gameId: gameId });
    
        expect(response.status).toBe(400);
    });

    it('Should return a text "steam id Required" if "steamId" is empty in "/achievements" ', async () => {
        const steamId = '';
        const gameId = '000000000001';
        const response = await request(app).get('/achievements').query({ steamId: steamId, gameId: gameId });
    
        expect(response.text).string("Steam id required");
    });

    // "/currentPlayers" route
    it('Should return a status code 400 if "gameId" is empty in "/currentPlayers" ', async () => {
        const gameId = '';
        const response = await request(app).get('/currentPlayers').query({ gameId: gameId });
    
        expect(response.status).toBe(400);
    });

    it('Should return a text "Game id Required" if "gameId" is empty in "/currentPlayers" ', async () => {
        const gameId = '';
        const response = await request(app).get('/currentPlayers').query({ gameId: gameId });
    
        expect(response.text).string("Game id required");
    });
});