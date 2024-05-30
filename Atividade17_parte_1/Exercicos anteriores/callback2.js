function exibeMenssagemNaOrdem(menssagem, callback){
    console.log(menssagem);
    callback();
}

exibeMenssagemNaOrdem('Essa e a primeira mensagem exibida ba ordem', function(){
    console.log('Essa e a segunda mensagem exibida na ordem')
});