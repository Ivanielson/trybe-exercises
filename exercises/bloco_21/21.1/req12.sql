-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o
-- primeiro nome tenha oito ou mais caracteres.
SELECT 
    *
FROM
    hr.employees
WHERE
    CHAR_LENGTH(FIRST_NAME) >= 8;