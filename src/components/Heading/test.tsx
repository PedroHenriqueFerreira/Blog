import { screen } from '@testing-library/react';
import { Heading } from '.';
import { customRender } from '../../utils/custom-render';

describe('<Heading />', () => {
  it('Should render a heading', () => {
    customRender(<Heading>Hello</Heading>);
    const element = screen.getByRole('heading', { name: /hello/i });

    expect(element).toHaveStyle('font-size: 5rem');
  });
});
