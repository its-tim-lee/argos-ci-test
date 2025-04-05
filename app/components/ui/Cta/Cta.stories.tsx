import ButtonIncludeBadge from "../../demo/button-include-badge.tsx";
import ButtonSearch from "../../demo/button-search.tsx";
export default {
  title: 'Example/Cta',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // excludeStories: ['BadgeInButton'],
}

export const Variant10 = { // Tag: search-button
  name: 'Scenario / Search Button',
  render: () => <ButtonSearch />
}

export const BadgeInButton = { // Nested Cta: Badge in button
  name: 'Scenario / Meta-info Button',
  render: () => <ButtonIncludeBadge />
};