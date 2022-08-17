import { SectionBackgroud } from '.';
import { SectionContainer } from '../SectionContainer';

export default {
  title: 'SectionBackgroud',
  component: SectionBackgroud,
  args: {
    children: (
      <SectionContainer>
        <div>
          <h1>SectionContainer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            laboriosam ducimus velit iure dolore iste? Ex atque hic maiores
            fuga, nulla rerum? Doloribus accusantium temporibus ullam ea magnam
            iure consequatur?
          </p>
        </div>
      </SectionContainer>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackgroud {...args} />
    </div>
  );
};
