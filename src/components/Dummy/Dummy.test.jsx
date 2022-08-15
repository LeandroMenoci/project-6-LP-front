import { Home } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Home/>', () => {
  it('Should render', () => {
    renderTheme(<Home>Children</Home>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
