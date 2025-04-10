import { Link } from '~/components/link';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://https://bd394417.portfolio-7ag.pages.dev/">Primary link</Link>
    <Link secondary href="https://https://bd394417.portfolio-7ag.pages.dev/">
      Secondary link
    </Link>
  </StoryContainer>
);
