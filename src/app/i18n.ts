import { createI18n, useI18n } from 'vue-i18n'
import enUS from '../locales/en-US.json'
import ptBR from '../locales/pt-BR.json'
import type { MessageSchema, NumberSchema } from '../locales/schema'

export const i18n = createI18n<
        {
            message: MessageSchema
            number: NumberSchema
        },
        'en-US',
        false
    >({
    locale: 'en-US',
    legacy: false,
    messages: {
        'en-US': enUS
    },
    numberFormats: {
        'en-US': {
            currency: {
                style: 'currency',
                currencyDisplay: 'symbol',
                currency: 'USD'
            }
        }
    }
});

export function getI18n() {
    return useI18n<{ message: MessageSchema; number: NumberSchema }>({
        useScope: 'global'
    });
}