import { NavLinks } from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<NavLinks/>', () => {
  it('Should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });
});
