import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<text-masking-component></text-masking-component>');
    const element = await page.find('text-masking-component');
    expect(element).toHaveClass('hydrated');
  });
});
