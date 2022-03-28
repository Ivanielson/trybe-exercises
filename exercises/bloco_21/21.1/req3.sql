-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando
-- pela média salarial em ordem decrescente.
SELECT 
    JOB_ID, (SALARY) AS `Average_wage`
FROM
    hr.employees
GROUP BY SALARY
ORDER BY `Average_wage` DESC;