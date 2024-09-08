function ord(arr){
  //cria a funçao ord ou ordernar
  let menor,media,maior
  //declara as variaveis menor media e maior
  if(arr[0]>arr[1] && arr[0]>arr[2]){
    maior=arr[0]
    //pregunta se o arr[0]e maior do que o restante dos mumeros se sim maior recebe o arr[0]
  }else if(arr[1]>arr[2] && arr[1]>arr[0]){
    maior=arr[1]
    //mesma coisa so q com o arr[1]
  }else{
    maior=arr[2] 
    //se nao for nenhum dos dois o maior recebe o ultimo q sobrou o arr[2]
  }if(arr[0]<arr[1] && arr[0]<arr[2]){
    menor=arr[0]
    //verifica se o arr[0] eo menor se sim o menor recebe o arr[0]
  }else if (arr[1]<arr[0] && arr[1]<arr[2]){
  menor = arr[1]
  //mesma coisa so q no else if deve ter um jeito de fazer isso de uma forma mais resumida ne possivel
  }else{
  menor=arr[2]
  // se nenhum a cima for atendido menor recebe arr[2]
}if(maior>arr[0] && arr[0]>menor){
  media = arr[0]
  //aqui eu usei o pouco de massa ensefalica me resta pra fazer uma coisa q preste pq eu nao tenho a menor ideia de como eu poderia cria a media sem o menor eo maior
}else if(maior>arr[1] && arr[1]>menor){
  media = arr[1]
  //cansei de explicar 
}else{
  media=arr[2]
  // o se burro pra nao entender isso
}
  return[menor,media,maior]
  //retorna os valores 
}
let nord = ord([10,2,13])
//armazenar dentro da variavel e mostra na tela
console.log(`${nord}`)