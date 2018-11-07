import { buildTranslations, buildConstants } from '../../../../../utils/i18nUtils';

const namespace = 'footer';
const translations = {
  es: {
    footerMessage: 'Remove completed items'
  }
};

export const strings = buildConstants(translations, namespace, 'es');
export default buildTranslations(translations, namespace);
