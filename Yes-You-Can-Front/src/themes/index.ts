import classic from './classic';
import dark from './dark';

export const THEMES = { classic, dark } as const;
export type ThemeName = keyof typeof THEMES;
