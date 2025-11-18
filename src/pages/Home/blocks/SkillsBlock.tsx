import { Container } from '@/src/shared/ui';
import { Skills } from '../components';

export const SkillsBlock = () => {
  return (
    <section id="skills" className="text-gray-800 scroll-mt-16">
      <Container className="py-12">
        <h2 className="text-4xl font-bold">Мой стек / технологии</h2>
        <div className="mt-8">
          <h3 className="font-bold text-2xl">Языки</h3>
          <Skills catagory="languages" />
        </div>
        <div className="mt-8">
          <h3 className="font-bold text-2xl">Фронтенд</h3>
          <Skills catagory="frontend" />
        </div>
        <div className="mt-8">
          <h3 className="font-bold text-2xl">Бэкенд и Базы данных</h3>
          <Skills catagory="backend" />
        </div>
        <div className="mt-8">
          <h3 className="font-bold text-2xl">Стилизация</h3>
          <Skills catagory="styling" />
        </div>
        <div className="mt-8">
          <h3 className="font-bold text-2xl">Инструменты и Экосистема</h3>
          <Skills catagory="tools" />
        </div>
      </Container>
    </section>
  );
};
