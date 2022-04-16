import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/Jonesmelo">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a></a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'JONES MELO\n'}
            <span className="text-primary-500">Programador</span>
          </>
        }
        description=""
        button={
          <Link href="https://github.com/Jonesmelo">
            <a>
              <Button xl>Entre em contato</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
