-- 14. Escreva uma query que exiba as seguintes informações de cada funcionário:
-- id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT 
    EMPLOYEE_ID,
    FIRST_NAME,
    DAY(HIRE_DATE) AS `HIRING_DAY`
FROM
    hr.employees;