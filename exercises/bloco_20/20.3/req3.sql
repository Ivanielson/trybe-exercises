SELECT 
    peca, preco, fornecedor
FROM
    PecasFornecedores.Fornecimentos
WHERE
    `fornecedor` LIKE '%N%';