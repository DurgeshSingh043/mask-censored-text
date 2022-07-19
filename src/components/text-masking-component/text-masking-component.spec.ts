import { newSpecPage } from '@stencil/core/testing';
import { TestMaskingComponent } from './text-masking-component';

describe('text-masking-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TestMaskingComponent],
      html: '<text-masking-component></text-masking-component>',
    });
    expect(root).toBeTruthy();
  });
});
