let contador = 1
while(contador <= 10){
	console.log(`contador = ${contador}`)
	contador++
}

for (let i = 1; i <= 10; i++) { //contador, expressao e incremento
	console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) { //length é o comprimento do array
	console.log(`nota = ${notas[i]}`)
}