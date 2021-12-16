/* Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação
( rating ) em ordem decrescente. */
SELECT 
    movies.title, box.rating
FROM
    Pixar.Movies AS `movies`
        INNER JOIN
    Pixar.BoxOffice AS `box` ON movies.id = box.movie_id
ORDER BY box.rating DESC;