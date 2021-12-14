-- 5. Escreva uma query que exiba quatro informações: o maior salário,
-- o menor salário, a soma de todos os salários e a média dos salários.
-- Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT 
    ROUND(MAX(SALARY), 2) AS `Higher_Salary`,
    ROUND(MIN(SALARY), 2) AS `Lowest_Salary`,
    ROUND(SUM(SALARY), 2) AS `Payroll`,
    ROUND(AVG(SALARY), 2) AS `Average_wage`
FROM
    hr.employees;