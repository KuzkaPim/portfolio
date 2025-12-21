import { Container } from '@/src/shared/ui';
import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-primary text-gray-600 text-sm">
      <Container className="py-4 text-center">
        <p>{t('copyright')}</p>
      </Container>
    </footer>
  );
};
