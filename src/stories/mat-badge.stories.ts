// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from '@storybook/angular';
import {MatButtonModule} from '@angular/material/button';
import {badgePositions, MatControls} from './common';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {MatBadge, MatBadgeModule} from '@angular/material/badge';

export default {
  title: 'Material/Badge',
  component: MatBadge,
  argTypes: {
    color: MatControls.Color,
    content: MatControls.Text,
    disabled: MatControls.Boolean,
    hidden: MatControls.Boolean,
    overlap: MatControls.Boolean,
    position: MatControls.select(badgePositions),
    size: MatControls.Size
  },
  args: {
    color: 'primary',
    content: '22',
    disabled: false,
    hidden: false,
    overlap: false,
    position: 'after',
    size: 'small'
  },
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatButtonModule, MatIconModule, MatBadgeModule],
    })
  ],
} as Meta;

const badge = '[matBadge]="content" [matBadgeOverlap]="overlap" [matBadgeDisabled]="disabled" [matBadgeHidden]="hidden" [matBadgePosition]="position" [matBadgeSize]="size" [matBadgeColor]="color"';

export const TextBadge: Story = props => ({template: `<span ${badge}>Text with a badge</span>`, props});
export const ButtonBadge: Story = props => ({template: `<button mat-raised-button color="primary" ${badge}>Action</button>`, props});
export const IconBadge: Story = props => ({template: `<mat-icon ${badge}>home</mat-icon>`, props});
