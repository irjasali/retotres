class fibonacciNumber {
  constructor(numero) {
    this.numero = numero;
  }

  calcularNumero(numeroF) {
   
    numeroF = parseInt(numeroF);        
    const arregloFinal = [];
    if (numeroF === 0) {
      arregloFinal.push(0);
    } else if (numeroF === 0 || numeroF >= 2) {
      arregloFinal.push(0);
      arregloFinal.push(1);
    }
    for (let x = 2; x <= numeroF - 1; x++) {
      arregloFinal.push(arregloFinal[x - 1] + arregloFinal[x - 2]);
    }
    document.getElementById("resultado").innerHTML +=" "+arregloFinal;
    return arregloFinal;
  }
}

const fibonacci =()=>{
let  valor = document.getElementById('num').value;
const numberOne = new fibonacciNumber();
document.getElementById("resultado").innerHTML +=" "+numberOne.calcularNumero(valor);
}
const limpiar=()=>{
  document.getElementById("num").value="XXX";
	document.getElementById("resultado").innerHTML ="La serie Fibonacci es:";
}
