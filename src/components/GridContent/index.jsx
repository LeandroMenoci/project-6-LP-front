import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackgroud } from '../SectionBackgroud';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';
export const GridContent = ({ title, html, background = false }) => {
  return (
    <SectionBackgroud background={background}>
      <Styled.Container>
        <Heading uppercase colorDark={!background}>
          {title}
        </Heading>
        <Styled.Html>
          <TextComponent>{html}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackgroud>
  );
};
GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
};
