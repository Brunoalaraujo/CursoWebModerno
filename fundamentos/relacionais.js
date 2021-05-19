console.log("01)", "1" == 1) // Comparativo de valores
console.log("02)", "1" === 1) // Comparativo de tipos, se é estritamente 
console.log("03)", "3" != 3) // Se é diferente, comparativo entre valores
console.log("04)", "3" !== 3) // Se é estritamente diferente, comparativo entre tipos

console.log("05)", 3 < 2)
console.log("06)", 3 > 2)
console.log("07)", 3 <= 2)
console.log("08)", 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log("09)", d1 === d2)
console.log("10)", d1 == d2)
console.log("11)", d1.getTime() === d2.getTime())

console.log("12)", undefined == null)
console.log("13)", undefined === null)

// Melhor utilizar o estritamente igual (===) para evitar erros