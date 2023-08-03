function resetForm()
{
    document.getElementById("prueba").reset();
}

function recursiva(numero)
{

    if (numero > 0 )
    {
        recursiva(numero-1);

        let result = '';
        let color = '';

        if(numero % 3 == 0 && numero % 5 == 0 )
        {
            result += 'fizzBuzz';
            color = 'orange'; // cambia a color naranja
        }
        else if (numero % 3 === 0 )
        {
            result += 'fizz';  
            color = 'red'; // cambia a color rojo
        }
        else if ( numero % 5 === 0)
        {
            result += ' buzz';
            color = 'yellow'; // cambiar a color amarillo
        }
        const btnMostrar = document.getElementById("resultado");
        var holaMundo = document.createElement('div');
        
        holaMundo.textContent = result || numero;
        holaMundo.style.color = color; // con esto aploca el color de los elementos 

            btnMostrar.appendChild(holaMundo);

    }

}






    