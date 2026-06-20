import { useTranslations } from 'next-intl';
import { Container } from '@/src/shared/ui';

export const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-primary text-content-primary text-sm py-6 text-center">
      <Container>
        <p>{t('copyright')}</p>
      </Container>
    </footer>
  );
};
