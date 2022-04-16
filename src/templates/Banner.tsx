import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title=""
      subtitle=""
      button={
        <Link href="/">
          <a>
            <Button>Inicio</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
