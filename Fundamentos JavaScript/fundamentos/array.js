/* estrutura unidirecional, onde é possivel armazenar
 varias variaveis(multiplos valores)
 fazer buscas e manipularções através de seus indices*/
/*
Em algumas linguagens os arrays são fixos, fortemente tipado
em JS os arrays são escaláveis, heterogeneos(podem armazenar diversos tipos) e 
não sao tipados
*/
const array1 = ['alta', 7.7, "teste", {},
    []
]
console.log(array1[3])
const array2 = ['alta', 7.7, "teste", {},
    ["array de array", 2]
]
console.log(array2[4])

// .push() insere um elemento na ultima posição do array
array1.push({ id: 4 })
console.log(array1)
    // .pop() remove do array o ultimo elemento, e o retorna
console.log(array1.pop());
// delete exclui o elemente na determinada posição que seja passada
delete array1[4]
console.log(array1)