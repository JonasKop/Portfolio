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
      text: '1rem',
      tiny: '1.2rem',
      small: '1.8rem',
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
    horizontal: '20vw',
    verticalSmall: '25px',
    vertical: '50px',
    verticalLarge: '100px',
    phone: '16px',
  },
  width: {
    min: '320px',
    max: '960px',
    phone: '650px',
    tablet: '1250px',
    computer: '1600px',
  },
  zIndex: {
    header: 75,
    footer: 50,
    main: 0,
  },
  gap: {
    small: '5px',
    regular: '10px',
    large: '40px',
    huge: '80px',
  },
};

export default {
  // Colors
  colorText: (p: Theme): string => p.theme.color.text,
  colorBackground: (p: Theme): string => p.theme.color.background,
  colorBackgroundLight: (p: Theme): string => p.theme.color.backgroundLight,
  colorBackgroundMedium: (p: Theme): string => p.theme.color.backgroundMedium,

  colorAccent: (p: Theme): string => p.theme.color.accent,
  colorExtra: (p: Theme): string => p.theme.color.extra,

  // Fonts
  fontSizeText: (p: Theme): string => p.theme.font.size.text,
  fontSizeTiny: (p: Theme): string => p.theme.font.size.tiny,
  fontSizeSmall: (p: Theme): string => p.theme.font.size.small,
  fontSizeMedium: (p: Theme): string => p.theme.font.size.medium,
  fontSizeLarge: (p: Theme): string => p.theme.font.size.large,
  fontSizeHuge: (p: Theme): string => p.theme.font.size.huge,
  fontWeightLight: (p: Theme): string => p.theme.font.weight.light,
  fontWeightRegular: (p: Theme): string => p.theme.font.weight.regular,
  fontWeightBold: (p: Theme): string => p.theme.font.weight.bold,
  fontFamilyHeader: (p: Theme): string => p.theme.font.family.header,
  fontFamilyText: (p: Theme): string => p.theme.font.family.text,
  fontFamilyMono: (p: Theme): string => p.theme.font.family.mono,

  // Size
  sizeSmall: (p: Theme): string => p.theme.size.small,

  // Padding
  paddingHorizontal: (p: Theme): string => p.theme.padding.horizontal,
  paddingVerticalSmall: (p: Theme): string => p.theme.padding.verticalSmall,
  paddingVertical: (p: Theme): string => p.theme.padding.vertical,
  paddingVerticalLarge: (p: Theme): string => p.theme.padding.verticalLarge,
  paddingPhone: (p: Theme): string => p.theme.padding.phone,

  // Width
  widthMin: (p: Theme): string => p.theme.width.min,
  widthMax: (p: Theme): string => p.theme.width.max,
  widthPhone: (p: Theme): string => p.theme.width.phone,
  widthTablet: (p: Theme): string => p.theme.width.tablet,
  widthComputer: (p: Theme): string => p.theme.width.computer,

  // Z-index
  zIndexHeader: (p: Theme): number => p.theme.zIndex.header,
  zIndexFooter: (p: Theme): number => p.theme.zIndex.footer,
  zIndexMain: (p: Theme): number => p.theme.zIndex.main,

  // Gap size
  gapSmall: (p: Theme): string => p.theme.gap.small,
  gapRegular: (p: Theme): string => p.theme.gap.regular,
  gapLarge: (p: Theme): string => p.theme.gap.large,
  gapHuge: (p: Theme): string => p.theme.gap.huge,
};

export type Theme = { theme: typeof appTheme };
