-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário:
-- id , primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT 
    EMPLOYEE_ID,
    FIRST_NAME,
    MONTH(HIRE_DATE) AS `HIRING_MONTH`
FROM
    hr.employees;