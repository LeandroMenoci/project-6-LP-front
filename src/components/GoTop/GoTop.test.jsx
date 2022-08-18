import { GoTop } from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

describe('<GoTop/>', () => {
  it('Should render a go to top button', () => {
    const { container } = renderTheme(<GoTop />);
    expect(
      screen.getByRole('heading', { name: 'Go to top' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Go to top' })).toHaveAttribute(
      'href',
      '#',
    );
    expect(container).toMatchInlineSnapshot();
  });
});
