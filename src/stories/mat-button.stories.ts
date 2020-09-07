// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from '@storybook/angular';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {action} from '@storybook/addon-actions';
import {ButtonType, copyStory, format, IconType, MatControls} from './common';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';

type TypedButton = MatButton & { type: ButtonType & IconType };

// templates
const button = `<button %s
    [color]="color"
    [disableRipple]="disableRipple"
    [disabled]="disabled"
    (click)="click($event)">{{label}}</button>`;

const buttonIcon = `<button %s
    [color]="color"
    [disableRipple]="disableRipple"
    [disabled]="disabled"
    (click)="click($event)"><mat-icon>{{icon}}</mat-icon></button>`;

export default {
  title: 'Material/Button',
  component: MatButton,
  argTypes: {
    // inputs
    color: MatControls.Color,
    disableRipple: MatControls.Boolean,
    disabled: MatControls.Boolean,
    // extra
    label: MatControls.Text,
    icon: MatControls.Icons
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
const ButtonStory: Story<MatButton> = (props: TypedButton) => ({template: format(button, props.type), props});
const IconButtonStory: Story<MatButton> = (props: TypedButton) => ({template: format(buttonIcon, props.type), props});

// Factories
const createButton = (type: ButtonType) => copyStory(ButtonStory, {type});
const createIcon = (type: IconType) => copyStory(IconButtonStory, {type});

// Stories
export const Basic = createButton(ButtonType.Basic);
export const Raised = createButton(ButtonType.Raised);
export const Stroked = createButton(ButtonType.Stroked);
export const Flat = createButton(ButtonType.Flat);
export const Icon = createIcon(IconType.Icon);
export const Fab = createIcon(IconType.Fab);
export const MiniFab = createIcon(IconType.MiniFab);

// // todo: needs better view for this story
// const allButtons = buttonTypes.map(type => buttonTpl(type));
// const allIcons = iconTypes.map(type => buttonTpl(type, iconTpl(IconType.PlaceHolder)));
// console.log(allIcons);
// export const AllButtons: Story<any> = (props: any) => ({
//   template: [...allButtons].join(''),
//   props
// });
