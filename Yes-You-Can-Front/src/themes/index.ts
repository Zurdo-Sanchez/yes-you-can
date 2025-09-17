import light from './light';
import dark from './dark';

export const THEMES = { light, dark } as const;
export type ThemeName = keyof typeof THEMES;
