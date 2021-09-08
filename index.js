function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max-min) + min)
}

function espera(mensagem, tempo){
  return new Promise((resolve, reject) => {
    if(typeof mensagem !== 'string') reject(false);

    setTimeout(()=> {
      resolve(mensagem)
    }, tempo)
  })
}