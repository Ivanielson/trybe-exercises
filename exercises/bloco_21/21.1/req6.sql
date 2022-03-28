-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como
-- pessoas programadoras ( IT_PROG ).
SELECT 
    COUNT(*) AS `Number of Programmers`
FROM
    hr.employees
WHERE
    JOB_ID = 'IT_PROG';