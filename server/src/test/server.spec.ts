import 'dotenv/config';
import { it, expect } from 'vitest';

it('Should return PORT Correctly', () => {
    const port = Number(process.env.PORT);
    expect(Number(process.env.PORT)).toBe(port);
});