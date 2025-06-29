import { ctaSection } from './components/ctaSection';
import { heroSection } from './components/heroSection';
import { popularCategorySection } from './components/popularCategorySection';
import { reviewsSection } from './components/reviewsSection';

export const HOME = `<main class="main" id="fullpage">
  ${heroSection}
  ${popularCategorySection}
  ${ctaSection}
  ${reviewsSection}
  </main>`;
