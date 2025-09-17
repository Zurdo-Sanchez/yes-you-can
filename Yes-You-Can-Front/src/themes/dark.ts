import light from './light';

function invertColor(hex: string): string {
  const c = hex.substring(1);
  const num = parseInt(c, 16);
  const inverted = 0xffffff ^ num;
  return `#${inverted.toString(16).padStart(6, '0')}`;
}

const darkTheme: Record<string, string> = {};
for (const [key, value] of Object.entries(light)) {
  darkTheme[key] = invertColor(value);
}

export default darkTheme;
