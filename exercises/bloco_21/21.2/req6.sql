/* 6. Utilizando o INNER JOIN , selecione todas as informações dos filmes com
avaliação maior que 8. */
SELECT 
    movies.*, box.rating
FROM
    Pixar.Movies AS `movies`
        INNER JOIN
    Pixar.BoxOffice AS `box` ON movies.id = box.movie_id
WHERE
    box.rating > 8;