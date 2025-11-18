import { Container } from '@/src/shared/ui';

export const Header = () => {
  return (
    <header className="sticky top-0 bg-primary z-20 shadow-sm h-16 text-gray-800 text-lg">
      <Container className="h-full flex items-center">
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="#promo"
                className="transition border-accent hover:border-b-2"
              >
                Главная
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="transition border-accent hover:border-b-2"
              >
                Мой стек / технологии
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                className="transition border-accent hover:border-b-2"
              >
                Обо мне
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                className="transition border-accent hover:border-b-2"
              >
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
