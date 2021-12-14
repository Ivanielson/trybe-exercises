-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT 
    MAX(SALARY) AS `Higher_Salary`
FROM
    hr.employees;