export const MatControls = {
  Color: {control: {type: 'inline-radio', options: ['primary', 'accent', 'warn']}},
  Appearance: {control: {type: 'inline-radio', options: ['standard', 'legacy']}},
  Boolean: {control: 'boolean'},
  Text: {control: 'text'},
  Icons: {control: {type: 'select', options: ['home', 'favorite', 'open_in_new', 'menu']}},
  Size: {control: {type: 'select', options: ['small', 'medium', 'large']}},

  select(options: string[]): any {
    return {control: {type: 'select', options}};
  }
};
