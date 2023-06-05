'use strict';

/*
 * GUERINI, MARIA CLARA
 */

// Ejemplo de la estructura de un disco:
// let disco = {
//     Nombre: 'El lado oscuro de la Programación',
//     Autor: 'Los Programadores Anónimos',
//     Codigo: 1,
//     Pistas: [
//         {
//             Nombre: 'Esa cajita loca llamada variablecita',
//             Duracion: 200,
//         },
//         {
//             Nombre: 'Nunca quise ser un NaN',
//             Duracion: 180,
//         },
//         {
//             Nombre: 'No quiero programar',
//             Duracion: 90,
//         },
//         {
//             Nombre: 'Bajo presión',
//             Duracion: 240,
//         },
//         {
//             Nombre: 'La odisea de las variables privadas',
//             Duracion: 120,
//         },
//         {
//             Nombre: 'Sr. Programador',
//             Duracion: 720,
//         },
//     ],
// };



// Discos:
let discos = [];

//Validar código
const validarCodigo = (codigo) => {

	if (codigo < 1) {
      alert('El código ingresado debe ser mayor a 1');
      return true;
    }
  
    if (codigo > 999) {
      alert('El código ingresado debe ser menor a 999');
      return true;
    }
    
    if (isNaN(codigo)) {
        alert('El código debe ser númerico');
	return true;
    }
  
    for (let index = 0; index < discos.length; index++) {
      if (codigo === discos[index].codigo) {
        alert('El código númerico ingresado ya fue cargado, escriba otro código');
        return true;
      }
    }
  
    return false;
  };

// Función Cargar:
const Cargar = () => {

         // datos a pedir:
    let disco = {
      nombre: "",
      autor: "",
      codigo: 0,
      pistas: [],
    };

    //validación de dato DISCO
    do {
        disco.nombre = prompt("Ingrese nombre del disco");
        if (disco.nombre === null) {
          return; // Cancelar la función si el usuario hace clic en "Cancelar"
        }
        disco.nombre=disco.nombre.trim(); //trim le saca los espacios a la variable para poder validar correctamente que el usuario haya escrito un texto, ya sea número o con letras 
        if (disco.nombre === "") {
          alert("El campo no debe estar vacío");
        }
      } while (disco.nombre === "");
    
     //validación de dato AUTOR
    do {
      disco.autor = prompt("Ingrese el autor");
      if (disco.autor === null) {
        return; // Cancelar la función si el usuario hace clic en "Cancelar"
      }
      disco.autor=disco.autor.trim(); //trim le saca los espacios a la variable para poder validar correctamente que el usuario haya escrito un texto, ya sea número o con letras
      if (disco.autor === "") {
        alert("El campo no debe estar vacío");
      }
    } while (disco.autor === "");


    // Validación de dato CÓDIGO  
    do {
		disco.codigo = parseInt(prompt("Ingrese código del disco"));
        if (disco.codigo === null) {
            return; 
		}
	  
	  } while (validarCodigo(disco.codigo));

     
       


    //DECLARO PISTA
    do {
      let pista = {
        nombre: "",
        duracion: 0,
      };
     // VALIDACION NOMBRE PISTA
      do {
        pista.nombre = prompt("Ingrese el nombre de la pista");
        if (pista.nombre === null) {
          return; 
        }
        pista.nombre=pista.nombre.trim(); //trim le saca los espacios a la variable para poder validar correctamente que el usuario haya escrito un texto, ya sea número o con letras
        if (disco.autor === "") {
          alert("El campo no debe estar vacío");
        }
        } while (pista.nombre === "");
  
        // VALIDACION DURACION PISTA
      do {
        pista.duracion = parseInt(prompt("Ingrese la duración de la pista."));
        if (pista.duracion === null) {
            return;
        }
        if (isNaN(pista.duracion)) {
            alert('El código debe ser númerico');
          }
        if (pista.duracion > 7201) {
            alert('La duración debe ser menor a 7200');
          }       
        } while (pista.duracion === "" || isNaN(pista.duracion) || pista.duracion > 7201);
      

  
      disco.pistas.push(pista);
    } while (confirm("¿Agregar otra pista?"));
  
    discos.push(disco);
    console.log("discos", discos);
}

// MOSTRAR RESULTADOS

const Mostrar = () => {
	
	const mainElement = document.querySelector('main');

	// Eliminar el contenido anterior de la lista de discos
	const ulDiscosAnterior = mainElement.querySelector('ul');
	if (ulDiscosAnterior) {
		mainElement.removeChild(ulDiscosAnterior);
	}
	const ulDiscos = document.createElement('ul');
  
	for (let i = 0; i < discos.length; i++) {
	  const disco = discos[i];
  
	  const liDisco = document.createElement('li');
	  liDisco.textContent = `Disco ${i + 1}`;
  
	  const ulDetalles = document.createElement('ul');
  
	  const liNombre = document.createElement('li');
	  liNombre.textContent = `Nombre: ${disco.nombre}`;
	  ulDetalles.appendChild(liNombre);
  
	  const liAutor = document.createElement('li');
	  liAutor.textContent = `Autor: ${disco.autor}`;
	  ulDetalles.appendChild(liAutor);
  
	  const liCodigo = document.createElement('li');
	  liCodigo.textContent = `Código: ${disco.codigo}`;
	  ulDetalles.appendChild(liCodigo);
  
	  const ulPistas = document.createElement('li');
      
	  for (let j = 0; j < disco.pistas.length; j++) {
		const pista = disco.pistas[j];
		const liPista = document.createElement('li');
		liPista.textContent = `Titulo Pista ${j + 1}: ${pista.nombre} - Duración: ${pista.duracion} segundos`;
        if (pista.duracion > 180) {
            liPista.setAttribute('id', 'duracionMayor');
          }
		ulPistas.appendChild(liPista);
	  }
	
	  ulDetalles.appendChild(ulPistas);
	  liDisco.appendChild(ulDetalles);
	  ulDiscos.appendChild(liDisco);
	}
  
	document.querySelector('main').appendChild(ulDiscos);
  };
