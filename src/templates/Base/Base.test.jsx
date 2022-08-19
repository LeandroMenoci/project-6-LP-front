import { Base } from '.';
import { renderTheme } from '../../styles/render-theme';
import { mockBase } from './mock';

describe('<Base/>', () => {
  it('Should render', () => {
    const { container } = renderTheme(<Base {...mockBase} />);
    expect(container).toMatchSnapshot();
  });
});
