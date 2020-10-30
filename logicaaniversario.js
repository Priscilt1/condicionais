// Quantos anos a pessoa tem?

// Precisamos avaliar o ano, mes e dia 

// exemplo se a pessoa faz aniversario no MES 11
// 11-12 = -1
// 11-11 = 0
// 11-10 = 1

// exemplo se a pessoa faz aniversario no DIA 12
// 01-12 = -11
// 12-12 = 0
// 13-12 = 1


// timestamp (segundo) de exemplo  1573568256893
function age (timestamp) {
    const today = new Date()
    const birtDate = new Date(timestamp)

    // getFullYear extrai o ano
    // 2019-1984 = 35
    let age = today.getFullYear() - birtDate.getFullYear()
    // verificando o mes para saber se fez aniversario ou não
    const month = today.getMonth() - birtDate.getMonth()

    // pegando a quantidade do ano e tirando 1 já que o resultado do mes foi menor que 0 ou 1 (nao fez aniversario)
    // 01-12 = -11           12-12 = 0
    // se eu estou no mes do aniversario, preciso verificar o dia (em caso positivo, fez aniversario)
    if (month < 0 || month == 0 && today.getDate () < birtDate.getDate()) {
        age = age-1 
    }

    return age
}


