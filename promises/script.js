//ASSINCRONIA EM JS - Promise

console.log("Inicio da execução");

function buscaDadosDoServidor(){

    return new Promise((resolve,reject) => {
        console.log("Buscando dados do servidor.");

        setTimeout(()=>{
            let sucesso = Math.random() > 0.5;

            if(sucesso){
                resolve("Dados recebido com sucesso");
            } else {
                reject("Falha ao buscar dados do servidor");
            }

        }, 2000);
    });
}

// Escrita semântica
const  minhaFuncaoAssincrona = async () => {
    try {
        const resultado = await buscaDadosDoServidor();
        console.log(resultado);
    } catch (erro) {
        console.error(erro);
    }
}

/*  ou (escrita menos semântica)

    buscaDadosDoServidor()
      .then((mensagem) => {
        console.log(mensagem);
      })
      .catch((erro) => {
        console.error(erro);
      });
*/

minhaFuncaoAssincrona();
console.log("Final da execução");