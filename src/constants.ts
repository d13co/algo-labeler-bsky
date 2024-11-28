import { type ComAtprotoLabelDefs } from '@atproto/api';

export const DELETE = 'insert-rkey-of-delete-post-here';
export const LABEL_LIMIT = 2;
export const LABELS: ComAtprotoLabelDefs.LabelValueDefinition[] = [
  {
    rkey: 'scam',
    identifier: 'scam',
    severity: 'alert',
    defaultSetting: 'warn',
    blurs: 'content',
    locales: [
      { lang: 'en', name: 'Scam❗', description: 'This account is fraudulent' },
    ]
  },
  {
    rkey: 'impersonator',
    identifier: 'impersonator',
    severity: 'alert',
    defaultSetting: 'warn',
    blurs: 'content',
    locales: [
      { lang: 'en', name: 'Impersonator❗', description: 'This account is impersonating a high-value account' },
    ]
  },
  {
    rkey: 'verified',
    identifier: 'verified',
    severity: 'inform',
    defaultSetting: 'ignore',
    blurs: 'none',
    locales: [
      { lang: 'en', name: 'Verified☑️', description: 'This account has been verified to be legitimate' },
    ]
  },
];
