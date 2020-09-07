// mat-button
export enum ButtonType {
  Basic = 'mat-button',
  Raised = 'mat-raised-button',
  Stroked = 'mat-stroked-button',
  Flat = 'mat-flat-button'
}

export const buttonTypes: ButtonType[] = Object.values(ButtonType);

// mat-icon
// mat-button
export enum IconType {
  Icon = 'mat-icon-button',
  Fab = 'mat-fab',
  MiniFab = 'mat-mini-fab',
  PlaceHolder = '{{icon}}'
}

export const iconTypes: IconType[] = Object.values(IconType);

// mat-badge
export enum BadgePosition {
  AboveAfter = 'above after',
  AboveBefore = 'above before',
  BelowBefore = 'below before',
  BelowAfter = 'below after',
  Before = 'before',
  After = 'after',
  Above = 'above',
  Below = 'below'
}
export const badgePositions: BadgePosition[] = Object.values(BadgePosition);
