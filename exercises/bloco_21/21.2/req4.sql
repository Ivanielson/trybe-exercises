/* 4. Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos
cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados
dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em
ordem alfabética. */
SELECT 
    *
FROM
    Pixar.Theater AS `cinemas`
        LEFT JOIN
    Pixar.Movies AS `movies` ON cinemas.id = movies.theater_id
ORDER BY cinemas.`name` ASC;