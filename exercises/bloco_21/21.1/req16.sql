-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT 
    CONCAT(UCASE(FIRST_NAME), ' ', UCASE(LAST_NAME)) AS `FULL_NAME`
FROM
    hr.employees;