import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section title="Python" description=".........">
    <VerticalFeatureRow
      title="Escreverei algo aqui"
      description="Mudando a imagem"
      image="/assets/images/feature.svg"
      imageAlt="Legenda da imagem"
    />
    <VerticalFeatureRow
      title="Titulo 2"
      description="........"
      image="/assets/images/feature2.svg"
      imageAlt="imagem 2"
      reverse
    />
    <VerticalFeatureRow
      title="Titulo 3"
      description="........."
      image="/assets/images/feature3.svg"
      imageAlt="Imagem 3"
    />
  </Section>
);

export { VerticalFeatures };
