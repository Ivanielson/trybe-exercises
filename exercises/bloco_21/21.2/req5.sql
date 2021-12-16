/* 5. Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos
filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas
que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética. */
SELECT 
    *
FROM
    Pixar.Theater AS `cinemas`
        RIGHT JOIN
    Pixar.Movies AS `movies` ON movies.theater_id = cinemas.id
ORDER BY cinemas.`name` ASC;