function suma (){
    var a;
    var b;
    var resuld;
    
        a = parseInt(prompt("ingrese el valor 1 :"));
        b = parseInt(prompt("ingrese el valor 2 :"));
        resuld = a+b;
    alert("el resultado de la suma es: "+resuld);
}
    function suma(){
        var a;
        var b;
        var suma;
        
        a = parseInt (prompt("Por favor ingrese el primer valor"));
        b = parseInt(prompt ("Por favor ingrese el segundo valor"));
        suma = a + b;
        
        alert("El resultado de la suma es : " + suma);
    
    }
    function resta(){
        var a;
        var b;
        var resta;
        
        a = parseInt (prompt("Por favor ingrese el primer valor"));
        b = parseInt (prompt ("Por favor ingrese el segundo valor"));
        resta = a - b;
        
        alert("El resultado de la resta es : " + resta);
    }
    
    function multiplicacion(){
        var a;
        var b;
        var multiplicacion;
        
        a = parseInt (prompt("Por favor ingrese el primer valor"));
        b = parseInt (prompt ("Por favor ingrese el segundo valor"));
        multiplicacion = a * b;
        
        alert("El resultado de la multiplicacion es : " + multiplicacion);
    }
    
    function division(){
        var a;
        var b;
        var division;
            
        a = parseInt (prompt("Por favor ingrese el primer valor"));
        b = parseInt (prompt ("Por favor ingrese el segundo valor"));
        division = a / b;
            
        alert("El resultado de la division es : " + division);
    }
    
    function numeroMayor (){
        var a;
        var b;
    
        a=parseInt(prompt("Ingrese el numero 1",""));
        b=parseInt(prompt("Ingrese el numero 2",""));
    
        if(a >= b)
        {
        alert("El numero mayor es: " + a );
        }
        else
        {
           
       alert("El numero mayor es : " + b );
    }
    }
    
    function numeroMenor (){ 
        var a;
        var b;
        var c;
    
        a=parseInt(prompt("Ingrese el numero 1: "));
        b=parseInt(prompt("Ingrese el numero 2: "));
        c=parseInt(prompt("Ingrese el numero 3: "));
    
        if (a <= b && a <= c) {
            men= a;
      } else {
          if (b < a && b<=c ){
            men=b;
          } else {
             men= c;
          }
    } 
      alert("El menor valor de los tres numeros es: "+ men)
    }
    
    function numero_par_impar(){
            
        var numero = 0;
    
        numero = prompt('Indique un número: ', '');
    
        if((numero % 2) == 0){
        alert(numero + ' es par');
        }else{
        alert(numero + ' es impar');
             }
    }
        
    function cuadrado_Numero(){
        var a;
    
        a = parseInt(prompt("Por favor ingrese un numero"));
        alert ("El cuadrado del numero: " + a +  "  es: "   + a*a);
    }
    
    function obtenerArea(){
        let b;
        let h;
        let area;
        
        b=parseInt(prompt("Por favor Ingrese la base del triangulo"));
        h=parseInt(prompt("Por favor Ingrese la altura del triangulo"));
        area = (b * h) / 2;
    
        alert("El resultado del area de un triangulo es : " + area );
    }
    
    function centimetroAmetros(){ 
       var num;
       var centimetros;
       var metros;
        num=parseInt(prompt("Por favor Ingrese los centimetrso:"));
        centimetros= num;
        metros = centimetros/100;
        alert("En centimetros  es:  " +  centimetros  + " y el valor dado en metros es:" +  metros + " metro(s)");
    }
    
    function calcularEdad(fecha) {
        var añoAct;
        var edad;
        var añoNcm;
       
        
        añoAct =parseInt(prompt("Por favor ingrese el presente año: "));
        edad = parseInt(prompt("Por favor ingrese su edad: "));
      
        añoNcm = añoAct - edad;
    
      alert("El año en que nacio es: "  + añoNcm);
    }
    
    function invertirCapital (){
        var capital;
        var ganancia;
        var años;
    
        capital =parseInt(prompt("Por favor Ingrese el capital invertido "));
        años  =parseInt(prompt("Por favor Ingrese el numero de años "));
    
        ganancia = capital * años * 0.2;
    
        alert("La ganancia por el capital invertido es: "  +  ganancia)
    }
    
    function promedio () {
        var N1;
        var N2;
        var N3;
        var N4;
        var N5;
        var NF;
        N1=parseInt(prompt("Por favor ingrese la primera nota"));
        N2=parseInt(prompt("Por favor ingrese la segunda nota"));
        N3=parseInt(prompt("Por favor ingrese la tercera nota"));
        N4=parseInt(prompt("Por favor ingrese la cuarta nota"));
        N5=parseInt(prompt("Por favor ingrese la quinta nota"));
        NF=(N1+N2+N3+N4+N5)/5
        if (NF>=3.0) {
            alert("Estudiante aprobado: "+NF)
        } else {
            NF<2.9
            alert("Estudiante reprobado: "+NF)
        
    }
    }
    
    function Descuento() {
            var k;
            var T;
            var Ds;
            k=parseFloat(prompt("Por favor ingrese el total de kilos de Manzanas"));
            T=k*4.500;
            if(k>=3.0 && k<=5.0) {
                Ds= (T - (T*0.1))
            }
            else if (k>=6.0 && k<=10) {
                Ds= (T - (T*0.15))
        
            }
            else if(k>=10){
                Ds= (T - (T*0.2))
            } 
            
            alert("El total de kilos  es de:  " + k);
            alert("Su total con descuento es de:  "+ Ds);
        }
