// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from '@storybook/angular';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {action} from '@storybook/addon-actions';
import {BOOLEAN, COLOR, TEXT} from './arg-types';
import {MatIconModule} from '@angular/material/icon';

const click = action('onClick');

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
    // click: action('click'),
  },
  args: {
    // inputs
    color: 'primary',
    disableRipple: false,
    disabled: false,
    // extra
    label: 'Label',
    type: 'mat-button',
    // output
    click: action('click'),
  },
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule, MatIconModule],
    })
  ],
} as Meta;

const Template: Story<MatCheckbox> = (args: MatCheckbox & { type: string }) => ({
  template: `<button ${args.type}
                [color]="color"
                [disableRipple]="disableRipple"
                [disabled]="disabled"
                (click)="click($event)">{{label}}</button>`,
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  type: 'mat-button',
};
export const Raised = Template.bind({});
Raised.args = {
  type: 'mat-raised-button'
};
export const Stroked = Template.bind({});
Stroked.args = {
  type: 'mat-stroked-button'
};
export const Flat = Template.bind({});
Flat.template = '<div></div>';
Flat.args = {
  type: 'mat-flat-button'
};
