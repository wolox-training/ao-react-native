export const required = value => (value ? undefined : 'Este campo es requerido');

export const minLength = value =>
  value.length < 8 ? 'Este campo debe tener como minimo 8 caracteres' : undefined;

export const email = value =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Email invalido' : undefined;
