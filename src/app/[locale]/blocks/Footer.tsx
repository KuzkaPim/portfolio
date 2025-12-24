import { Container } from '@/src/shared/ui';
import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-primary text-gray-700 text-sm py-4 text-center">
      <Container>
        <p>{t('copyright')}</p>
      </Container>
    </footer>
  );
};
