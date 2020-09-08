import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export const appTheme = {
  color: {
    text: '#f7f7f7',
    background: '#1E2134',
    backgroundLight: '#313552',
    backgroundMedium: '#272B43',
    accent: '#FEC576',
  },
  font: {
    size: {
      micro: '0.7rem',
      text: '1rem',
      tiny: '1.2rem',
      small: '1.8rem',
      regular: '2.5rem',
      medium: '3rem',
      large: '4rem',
      huge: '6rem',
    },
    weight: {
      light: '300',
      regular: '400',
      bold: '700',
    },
    family: {
      header: "'Cormorant Garamond', serif",
      text: "'Source Sans Pro', sans-serif",
      mono: "'Source Code Pro', monospace;",
    },
  },
  size: {
    small: '40px',
  },
  padding: {
    micro: '6px',
    tiny: '10px',
    horizontal: '20vw',
    small: '20px',
    medium: '40px',
    large: '100px',
    phone: '16px',
  },
  width: {
    min: '320px',
    max: '960px',
    phone: '650px',
    tablet: '1000px',
    computer: '1600px',
  },
  zIndex: {
    header: 75,
    footer: 50,
    main: 0,
  },
  gap: {
    small: '5px',
    regular: '14px',
    medium: '28px',
    large: '40px',
    huge: '80px',
  },
};

export interface Active extends ThemeObj {
  active?: boolean;
}

const t = {
  // Colors
  colorText: (p: ThemeObj): string => p.theme.color.text,
  colorBackground: (p: ThemeObj): string => p.theme.color.background,
  colorBackgroundLight: (p: ThemeObj): string => p.theme.color.backgroundLight,
  colorBackgroundMedium: (p: ThemeObj): string => p.theme.color.backgroundMedium,

  colorAccent: (p: ThemeObj): string => p.theme.color.accent,

  // Fonts
  fontSizeMicro: (p: ThemeObj): string => p.theme.font.size.micro,
  fontSizeText: (p: ThemeObj): string => p.theme.font.size.text,
  fontSizeTiny: (p: ThemeObj): string => p.theme.font.size.tiny,
  fontSizeSmall: (p: ThemeObj): string => p.theme.font.size.small,
  fontSizeRegular: (p: ThemeObj): string => p.theme.font.size.regular,
  fontSizeMedium: (p: ThemeObj): string => p.theme.font.size.medium,
  fontSizeLarge: (p: ThemeObj): string => p.theme.font.size.large,
  fontSizeHuge: (p: ThemeObj): string => p.theme.font.size.huge,
  fontWeightLight: (p: ThemeObj): string => p.theme.font.weight.light,
  fontWeightRegular: (p: ThemeObj): string => p.theme.font.weight.regular,
  fontWeightBold: (p: ThemeObj): string => p.theme.font.weight.bold,
  fontFamilyHeader: (p: ThemeObj): string => p.theme.font.family.header,
  fontFamilyText: (p: ThemeObj): string => p.theme.font.family.text,
  fontFamilyMono: (p: ThemeObj): string => p.theme.font.family.mono,

  // Size
  sizeSmall: (p: ThemeObj): string => p.theme.size.small,

  // Padding
  paddingMicro: (p: ThemeObj): string => p.theme.padding.micro,
  paddingTiny: (p: ThemeObj): string => p.theme.padding.tiny,
  paddingHorizontal: (p: ThemeObj): string => p.theme.padding.horizontal,
  paddingSmall: (p: ThemeObj): string => p.theme.padding.small,
  paddingMedium: (p: ThemeObj): string => p.theme.padding.medium,
  paddingLarge: (p: ThemeObj): string => p.theme.padding.large,
  paddingPhone: (p: ThemeObj): string => p.theme.padding.phone,

  // Width
  widthMin: (p: ThemeObj): string => p.theme.width.min,
  widthMax: (p: ThemeObj): string => p.theme.width.max,
  widthPhone: (p: ThemeObj): string => p.theme.width.phone,
  widthTablet: (p: ThemeObj): string => p.theme.width.tablet,
  widthComputer: (p: ThemeObj): string => p.theme.width.computer,

  // Z-index
  zIndexHeader: (p: ThemeObj): number => p.theme.zIndex.header,
  zIndexFooter: (p: ThemeObj): number => p.theme.zIndex.footer,
  zIndexMain: (p: ThemeObj): number => p.theme.zIndex.main,

  // Gap size
  gapSmall: (p: ThemeObj): string => p.theme.gap.small,
  gapRegular: (p: ThemeObj): string => p.theme.gap.regular,
  gapMedium: (p: ThemeObj): string => p.theme.gap.medium,
  gapLarge: (p: ThemeObj): string => p.theme.gap.large,
  gapHuge: (p: ThemeObj): string => p.theme.gap.huge,

  activeColor: (p: Active): string => (p.active ? p.theme.color.accent : p.theme.color.text),
};

export default t;

export type Theme = typeof appTheme;
export type ThemeObj = { theme: Theme };

export interface ActiveProps {
  active: boolean;
}

export function useActiveColor(active: boolean): string {
  const theme = useContext(ThemeContext);
  return active ? t.colorAccent({ theme }) : t.colorText({ theme });
}
