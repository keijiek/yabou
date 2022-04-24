export const Attributes = {
  STR: 'Strength',
  INT: 'Intelligence',
  LIBIDO: 'Libido',
} as const;
export type Attributes = typeof Attributes[keyof typeof Attributes];
