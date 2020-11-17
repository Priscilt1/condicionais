function graduationFull(schooling) {
    if (schooling == "EM") {
     return "Ensino Medio Completo"
    } if (schooling == "ES") {
        return "Ensino Superior completo"
    } if (schooling == "M") {
        return "Mestrado"
    } if (schooling == "D") {
        return "Doutorado"
    }
}

function graduation(schooling) {
    const graduations = {
      "EM": "Ensino Médio Completo",
      "ES": "Ensino Superior Completo",
      "M": "Mestrado",
      "D": "Doutrado"
    }

    return graduations[schooling]
}

console.log(graduation("EM"))
console.log(graduationFull("EM"))
