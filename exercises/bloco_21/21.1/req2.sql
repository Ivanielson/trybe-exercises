-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT 
    MIN(SALARY) AS `Lowest_Salary`
FROM
    hr.employees;