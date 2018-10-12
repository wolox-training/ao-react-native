export const required = value => (value ? undefined : 'Este campo es requerido');

export const minLength = value =>
  value.length < 8 ? 'Este campo debe tener como minimo 8 caracteres' : undefined;
