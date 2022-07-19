import { replaceAll, generateMaskString, getStringsFrequency } from './utils';

describe('format', () => {
  it('return replaced string', () => {
    expect(replaceAll('Hello Meltwater censor text', 'censor', 'XXXX', undefined)).toEqual('Hello Meltwater XXXX text');
  });

  it('return masked string of given length', () => {
    expect(generateMaskString('Meltwater'.length)).toEqual('XXXXXXXXX');
  });

  it('get frequency of given word in string', () => {
    expect(getStringsFrequency('Hello Meltwater censor text', ['text'], false)[0].frequency).toEqual(1);
  });
});
