export const COLORS = {
  PRIMARY: '#0000FF',
  PRIMARY_LIGHT: '#0000FF',
  WHITE: '#FFFFFF',
  MUTED_WHITE: 'rgba(255, 255, 255, 0.8)',
  BLACK: '#000000',
  GRAY: '#808080',
} as const; 

export const BORDER_RADIUS = {
  SMALL: 8,
  MEDIUM: 12,
  LARGE: 20,
  FULL: 9999,
} as const;

export const FONT_SIZE = {
  SMALL: 12,
  MEDIUM: 16,
  LARGE: 20,
  XLARGE: 32,
} as const;

export const FONT_WEIGHT = {
  LIGHT: '200',
  REGULAR: '400',
  MEDIUM: '500',
  SEMI_BOLD: '600',
  BOLD: '700',
} as const;

export const SPACING = {
  XSMALL: 4,
  SMALL: 12,
  MEDIUM: 16,
  LARGE: 24,
  XLARGE: 32,
} as const;

export const ALIGNMENT = {
  CENTER: 'center',
  LEFT: 'left',
  RIGHT: 'right',
} as const;

export const BORDER_WIDTH = {
  THIN: 1,
  MEDIUM: 2,
  THICK: 3,
} as const;