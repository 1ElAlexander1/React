import React from 'react';

const FilmList = ({ films }) => {
  if (!films) {
    return <div>Загрузка...</div>;
  }

  if (films.length === 0) {
    return <div>Нет доступных фильмов</div>;
  }
return (
    <div>
      {films
        .filter((film) => film.nameRu) // Отфильтруем фильмы, оставим только те, у которых есть название
        .map((film) => (
          <div key={film.kinopoiskId}>
            <h2>{film.nameRu}</h2>
            <img src={String(film.posterUrl)} alt={String(film.nameRu)}/>
            <p>{film.year}</p>
            {/* Другие детали фильма */}
          </div>
        ))}
    </div>
  );
};

export default FilmList;
 

// return (
//     <div>
//       {films.map((film) => (
//         <div key={film.kinopoiskId}>
//           <h2>{film.nameRu}</h2>
//           <img 
//           src={String(film.posterUrl)} 
//           alt={String(film.nameRu)} /> 
//           {/*Добавил отображение постера*/}
//           <p>{film.nameEn}</p>
//           {/* Другие детали фильма */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FilmList;