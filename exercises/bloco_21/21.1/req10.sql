-- 10. Escreva um query que exiba média salarial e o número de funcionários de
-- todos os departamentos com mais de dez funcionários. Dica: agrupe pelo
-- department_id.
SELECT 
    AVG(SALARY) AS `AVERAGE_WAGE`,
    COUNT(EMPLOYEE_ID) AS `NUMBER_EMPLOYEES`
FROM
    hr.employees
GROUP BY DEPARTMENT_ID
HAVING `NUMBER_EMPLOYEES` > 10;