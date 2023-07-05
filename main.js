async function cepNovo(cep){
    const MensagemErro = document.getElementById('erro')
    MensagemErro.innerHTML = ''
    
    try{
        const cepBancoDeDados = await fetch(`https://viacep.com.br/ws/${cep}/json`)
        const cepDecodificado = await cepBancoDeDados.json()
        console.log(cepDecodificado)
        
        if(cepBancoDeDados.erro){
            throw Error('Esse cep não existe')
        }

        const bairro = document.getElementById('bairro')
        const logradouro = document.getElementById('endereco')
        const cidade = document.getElementById('cidade')
        const estado = document.getElementById('estado')


        bairro.value = cepDecodificado.bairro
        logradouro.value = cepDecodificado.logradouro
        cidade.value = cepDecodificado.localidade
        estado.value = cepDecodificado.uf
        
        return cepDecodificado        
        
    }catch{
        console.log('erro')
        MensagemErro.innerHTML = "Esse cpf esta inválido" 

    }
   
}

const cep = document.getElementById('cep');
cep.addEventListener('focusout',() => cepNovo(cep.value))