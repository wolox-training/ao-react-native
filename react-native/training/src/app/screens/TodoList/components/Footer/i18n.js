import { buildTranslations, buildConstants } from '../../../../../utils/i18nUtils';

// TODO: Replace here the screens titles

const namespace = 'footer';
const translations = {
  es: {
    footerMessage: 'Remove completed items'
  }
};

export const strings = buildConstants(translations, namespace, 'es');
export default buildTranslations(translations, namespace);
