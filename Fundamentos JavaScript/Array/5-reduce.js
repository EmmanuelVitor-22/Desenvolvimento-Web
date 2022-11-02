/*
Função que permite transformar um array em um unico elemento,
ou em outroo array ou em uma string (depende do critério definido);
Tem um parâmetro que será acumulado de chamada em chamada, toda vez que for passado
O resultado do reduce é o acumulador sempre é passado como resposta (da função anterior para a proxima função),
ou seja, o primeiro reduce recebe os dois  primeiros elementos de um array (0,1), onde o primeiro elemento é o acumuladoe
e o segundo é o item atual. O resultado disso é passado para a proxima função sendo o acumulador mais o elemento atual
e assim por diante.

EXPLICAÇÃO MAIS CLARA SOBRE: https://raullesteves.medium.com/javascript-entendendo-o-reduce-de-uma-vez-por-todas-c4cbaa16e380

*/ 