import { expect } from 'chai';

import { helloWorld } from '../main';

describe('Template Test', () => {
  it('should say hello world', () => {
    expect(helloWorld).to.eq('Hello world!');
  });
});
