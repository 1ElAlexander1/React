import React, { useState, useEffect } from 'react';
import FilmList from './FilmList';
import { getFilms } from './api'; // Импортируем функцию для получения фильмов
import './App.css'; // Импорт файла стилей

function App() {
  const [films, setFilms] = useState(null); // Изменим начальное значение на null

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const data = await getFilms(); // Получаем фильмы
        console.log(data); // Проверим, что данные приходят в консоль
        setFilms(data.items); // Обновляем состояние с полученными фильмами
      } catch (error) {
        console.error('Error fetching films', error);
      }
    };

    fetchFilms(); // Вызываем функцию получения фильмов при монтировании компонента
  }, []);

  console.log(films); // Также проверьте, что данные сохранены в состоянии

  if (films === null) { // Покажем "Loading...", пока данные не пришли
    return <div>Загрузка...</div>;
  }

  return (
    
    <div className="parent">
      <h1>Кинопоиск</h1>
        <div className="container">
          <FilmList films={films} /> {/* Передаем полученные фильмы в компонент FilmList */}
        </div>
    </div>
  );
}

export default App;
