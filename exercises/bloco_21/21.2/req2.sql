-- 2. Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas
-- para cada filme que possui um número maior de vendas internacionais
-- ( international_sales ) do que vendas nacionais ( domestic_sales ).
SELECT 
    movies.title, box.international_sales
FROM
    Pixar.Movies AS `movies`
        INNER JOIN
    Pixar.BoxOffice AS `box` ON movies.id = box.movie_id
WHERE
    box.international_sales > box.domestic_sales;