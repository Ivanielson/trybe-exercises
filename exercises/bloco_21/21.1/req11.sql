-- Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os
-- telefones iniciados por 515 agora devem iniciar com 777.
SELECT 
    REPLACE(PHONE_NUMBER, 515, 777) AS `UPDATE_NUMBER`
FROM
    hr.employees;