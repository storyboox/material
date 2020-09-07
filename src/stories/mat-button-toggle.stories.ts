// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {MatControls} from './common';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {MatButtonToggle, MatButtonToggleModule} from '@angular/material/button-toggle';

// templates
const toggle = `<mat-button-toggle-group
  (change)="change($event)"
  [appearance]="appearance"
  [disabled]="disabled"
  [multiple]="multiple"
  [name]="name"
  [value]="value"
  [vertical]="vertical">
  <mat-button-toggle value="bold">Bold</mat-button-toggle>
  <mat-button-toggle value="italic">Italic</mat-button-toggle>
  <mat-button-toggle value="underline">Underline</mat-button-toggle>
</mat-button-toggle-group>`;

const toggleIcons = `<mat-button-toggle-group
  (change)="change($event)"
  [appearance]="appearance"
  [disabled]="disabled"
  [multiple]="multiple"
  [name]="name"
  [value]="value"
  [vertical]="vertical">
  <mat-button-toggle value="left" aria-label="Text align left">
    <mat-icon>format_align_left</mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="center" aria-label="Text align center">
    <mat-icon>format_align_center</mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="right" aria-label="Text align right">
    <mat-icon>format_align_right</mat-icon>
  </mat-button-toggle>
  <mat-button-toggle value="justify" disabled aria-label="Text align justify">
    <mat-icon>format_align_justify</mat-icon>
  </mat-button-toggle>
</mat-button-toggle-group>`;

export default {
  title: 'Material/Button Toggle',
  component: MatButtonToggle,
  argTypes: {
    appearance: MatControls.Appearance,
    disabled: MatControls.Boolean,
    multiple: MatControls.Boolean,
    name: MatControls.Text,
    vertical: MatControls.Boolean
  },
  args: {
    appearance: 'standard',
    disabled: false,
    multiple: false,
    name: 'name',
    vertical: false,
    change: action('change'),
  },
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatButtonToggleModule, MatIconModule],
    })
  ],
} as Meta;

// Stories
export const Buttons: Story = props => ({template: toggle, props});
export const IconButtons: Story = props => ({template: toggleIcons, props});
