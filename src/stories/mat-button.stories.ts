// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from '@storybook/angular';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {action} from '@storybook/addon-actions';
import {BOOLEAN, COLOR, ICONS, TEXT} from './arg-types';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {copyStory} from './utils';

enum ButtonType {
  Basic = 'mat-button',
  Raised = 'mat-raised-button',
  Stroked = 'mat-stroked-button',
  Flat = 'mat-flat-button'
}

enum IconType {
  Icon = 'mat-icon-button',
  Fab = 'mat-fab',
  MiniFab = 'mat-mini-fab'
}

const buttonTemplate = (type: string) => `<button ${type}
                                              [color]="color"
                                              [disableRipple]="disableRipple"
                                              [disabled]="disabled"
                                              (click)="click($event)">{{label}}</button>`;

const iconButtonTemplate = (type: string) => `<button ${type}
                                              [color]="color"
                                              [disableRipple]="disableRipple"
                                              [disabled]="disabled"
                                              (click)="click($event)"><mat-icon>{{icon}}</mat-icon></button>`;
type TypedButton = MatButton & { type: string };

export default {
  title: 'Material/Button',
  component: MatButton,
  argTypes: {
    // inputs
    color: COLOR,
    disableRipple: BOOLEAN,
    disabled: BOOLEAN,
    // extra
    label: TEXT,
    icon: ICONS
  },
  args: {
    // inputs
    color: 'primary',
    disableRipple: false,
    disabled: false,
    // extra
    label: 'Label',
    icon: 'home',
    type: 'mat-button',
    // output
    click: action('click'),
  },
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatButtonModule, MatIconModule],
    })
  ],
} as Meta;

// Templates Stories
const Button: Story<MatButton> = (props: TypedButton) => ({
  template: buttonTemplate(props.type),
  props
});

const IconButton: Story<MatButton> = (props: MatButton & { type: string }) => ({
  template: iconButtonTemplate(props.type),
  props
});

// Factories
const createButton = (type: ButtonType) => copyStory(Button, {type});
const createIcon = (type: IconType) => copyStory(IconButton, {type});

// Stories
export const Basic = createButton(ButtonType.Basic);
export const Raised = createButton(ButtonType.Raised);
export const Stroked = createButton(ButtonType.Stroked);
export const Flat = createButton(ButtonType.Flat);
export const Icon = createIcon(IconType.Icon);
export const Fab = createIcon(IconType.Fab);
export const MiniFab = createIcon(IconType.MiniFab);

const buttons = Object.values(ButtonType).map(type => buttonTemplate(type));
const icons = Object.values(IconType).map(type => iconButtonTemplate(type));

export const AllButtons: Story<any> = (props: any) => ({
  template: '<span>' + [...buttons, ...icons].join('</span><span>') + '</span>';
  props
});
