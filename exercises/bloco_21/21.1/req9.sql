-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos
-- os cargos, exceto das pessoas programadoras ( IT_PROG ).
SELECT 
    JOB_ID,
    AVG(SALARY) AS `Average_wage`
FROM
    hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY `Average_wage` DESC;