import { Container } from '@/src/shared/ui';

export const AboutMeBlock = () => {
  return (
    <section id="about-me" className="bg-secondary text-dark sm:scroll-mt-16">
      <Container className="py-12">
        <h2 className="text-4xl font-bold">Обо мне</h2>
        <div className="text-lg leading-7 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
          <div>
            <p className="mt-8">
              Привет! Я Кузьма, фронтенд-разработчик, и я фанат того, чтобы
              превращать классные идеи в по-настоящему работающие
              веб-приложения.
            </p>
            <p className="mt-8">
              Мне нравится, когда интерфейс красивый, но еще больше — когда он{' '}
              <span className="bg-accent text-secondary px-1 rounded-md shadow-md">
                быстрый
              </span>
              ,{' '}
              <span className="bg-accent text-secondary px-1 rounded-md shadow-md">
                надежный
              </span>
              , и его код легко поддерживать. Моя главная цель — заложить
              прочный и чистый фундамент для любого проекта.
            </p>
          </div>
          <div>
            <p className="mt-8">
              В разработку я пришел через интенсивный курс, где сразу поставил
              себе задачу: учить не просто синтаксис, а архитектуру. Именно
              поэтому я сразу погрузился в работу над реальным
              Fullstack-проектом. Опыт с{' '}
              <span className="bg-accent text-secondary px-1 rounded-md shadow-md">
                Nest.js
              </span>{' '}
              и монорепозиториями{' '}
              <span className="bg-accent text-secondary px-1 rounded-md shadow-md">
                NX
              </span>{' '}
              дал мне понимание всего цикла разработки: я знаю, как правильно
              общаться с бэкендом, потому что сам его писал.
            </p>
            <p className="mt-8">
              В работе всегда ставлю во главу угла{' '}
              <span className="bg-accent text-secondary px-1 rounded-md shadow-md">
                TypeScript
              </span>{' '}
              и принципы{' '}
              <span className="bg-accent text-secondary px-1 rounded-md shadow-md">
                чистой
              </span>{' '}
              компонентной архитектуры, чтобы гарантировать стабильность. Я ценю{' '}
              <span className="bg-accent text-secondary px-1 rounded-md shadow-md">
                командную работу
              </span>
              , люблю разбираться в сложных задачах и всегда готов быстро
              учиться новому.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
