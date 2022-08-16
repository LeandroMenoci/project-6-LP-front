import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus sunt impedit autem dolores nam omnis obcaecati ut minus neque consectetur magnam sed tempora voluptatum, quae aut magni consequatur, excepturi nobis.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
