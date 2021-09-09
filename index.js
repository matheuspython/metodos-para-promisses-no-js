function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max-min) + min)
}

function espera(mensagem, tempo){
  return new Promise((resolve, reject) => {
    if(typeof mensagem !== 'string') reject(false);

    setTimeout(()=> {
      resolve(mensagem + ' promisse aceita')
    }, tempo)
  })
}//promisse que espera uma mensagem do tipo string

/*
  metodos
    Promise.all
    Promise.race
    Promise.reject
*/

/*
  promisse all

  vc passa um array com promisses ou valores ja resolvidos
  e ele vai te retornar uma promessa com os valores dentro de um array
*/
const promises = [
  'valor 1',
  espera('Promisse 1', 3000),
  espera('Promisse 2', 500),
  espera('Promisse 3', 1000),
  'outro valor'
];

Promise.all(promises).then(function(valor){
  console.log(valor)
}).catch(function(error){
  console.log(error)
})

/* retorno
  [
   'valor 1',
   'Promisse 1',
   'Promisse 2',
   'Promisse 3',
   'outro valor'
  ]
*/