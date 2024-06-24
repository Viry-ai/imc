// Declaracion variables, pedir datos, el prompt devuelve string
let peso = Number (prompt("Escribe el peso en Kg "))
let estatura = Number(prompt("Escribe la estatura en metros "))  
let imc = peso/(estatura**2)   



//mostrar la siguiente leyenda: El IMC es
alert("El IMC para una persona con peso: "+ peso + " Con estatura \n" + estatura +" El IMC es:\n  " + (imc)) 
if (imc>30)
{
    alert("EL Usuario tiene obesidad, consulte a su médico")
}
else

{
    if (imc>=18.5 && imc<=24.9)
{
    alert("EL Usuario tiene peso adecuado")

}
else
{

if (imc<18.5)
{
    alert("EL Usuario tiene bajo peso, consulte a su médico ")
    
}

else

{
 if (imc>=25 && imc<=29)
 {
    alert("EL Usuario tiene sobrepeso, consulte a su médico ")
 }
}
}
}