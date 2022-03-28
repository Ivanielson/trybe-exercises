/* 1.  Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales )
e internacionais ( international_sales ) de cada filme. */
SELECT 
    movies.title, Box.domestic_sales, Box.international_sales
FROM
    Pixar.Movies AS `movies`
        INNER JOIN
    Pixar.BoxOffice AS `Box` ON movies.id = Box.movie_id;