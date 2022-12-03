//Realice un simulador de una tienda de ropa urbana

//Saludo de bienvenida
function bienBenida (mensaje){
    alert(mensaje);
    console.log(mensaje);
}

bienBenida("Bienvenido/a , somos NINETY una tienda de ropa urbana");


//Funcion para elegir una prenda : use do while y switch para organizar las opciones 
function elegir_prenda (){

    do {
        prenda = prompt("Ingrese que tipo de prenda le gustaria comprar: (remeras /pantalones /camperas)").toLowerCase();
    } while ((prenda != "remeras") && (prenda != "pantalones") && (prenda != "camperas")){


        switch(prenda) {
            case "remeras":
                avisoPrecio = "El precio de las remeras es de : $3.000";
                precio = 3000;
                
                break;
            case "pantalones":
                avisoPrecio = "El precio de las pantalones es de : $10.000";
                precio = 10000;
                
                break;
            case "camperas":
                avisoPrecio = "El precio de las camperas es de : $20.000";
                precio = 20000;
                
                break;
        }
    
        alert(avisoPrecio );
        console.log(avisoPrecio)
    

    }
       

}

elegir_prenda();






//Utilice una funcion donde puse condicionales dentro para que cuando no pongas nada o des en cancelar te salte un mensaje de error
function elegirTalle(){

   talle = prompt("Ingrese el talle: (S /M / L / XL )");
    
    if (talle == null){ 

        alert("Error! Ingrese correctamente su talle!");

    } else if (talle.length == 0) {

        alert("Error! Ingrese correctamente su talle!");

    } else {
        
        if (talle ==="s"){

            alert("Elegiste talle S");
    
        } else if (talle === "m"){
    
            alert("Elegiste talle M");
    
        } else if (talle === "l"){
    
            alert("Elegiste talle L");
        }else if (talle === "xl"){
    
            alert("Elegiste talle XL");
        }else{
            talle = prompt("Ingrese el talle: (S /M / L / XL )").toLowerCase();
        }


    } 
    
    
    
}

elegirTalle();



//funcion flecha para la eleccion de las unidades
const unidades = () =>{
    
    do{
        cantidad = parseInt(prompt("Ingrese la cantidad que quiere comprar: (Máximo 10 unidades)"));
    
    } while ((cantidad < 1) || (cantidad > 10));
    console.log("Elegiste " + cantidad + " unidades de "  + prenda);
    

}

unidades();


//funcion par elegir el pago y con eso que determine cuanto es el total de la compra con descuento o sin descuento con iva o sin iva .
function medioDePago (){
    do {
        formaDePago = prompt("Ingrese la forma de pago: (debito / credito) Pagando con debito se le aplica un 20% de descuento y con credito se le aplica un 10% de interes ").toLowerCase();
    } while ((formaDePago != "debito") && (formaDePago  != "credito") ) 
    console.log("El medio de pago que seleccionaste es " + formaDePago);{


        switch(formaDePago) {

            case "debito":
                pago= (precio *cantidad )-((precio*cantidad)*0.20)  ;
                valor_total= pago;
                alert("El precio total pagando con debito es de: $" + pago.toFixed(2) );
                console.log("El precio total pagando con debito es de $"+ valor_total + " (incluye el 20% de descuento)");
                alert("RESUMEN DE TU COMPRA: \n\nProducto: " + prenda + "\n" + "Talle : " + talle + "\n" + "Unidades: " + cantidad + "\n" + "Monto: $" + precio.toFixed(2) + "\n" + "Forma de pago: " + formaDePago);
                alert("Total a Pagar: $" + pago.toFixed(2) );
                break;
        
            case "credito":
                cuotas = parseInt(prompt("Ingrese la Cantidad de Cuotas: (Máximo 24 meses)"));
                console.log("Elegiste pagar en : " + cuotas + "cuotas");
                pago = ((precio *cantidad )*0.10) + (precio*cantidad);
                valor_cuotas = (pago / cuotas);
                console.log("La cuota por mes es de : $"+ valor_cuotas);
                alert("RESUMEN DE TU COMPRA: \n\nProducto: " + prenda + "\n" + "Talle : " + talle + "\n" + "Unidades: " + cantidad + "\n" + "Monto: $" + precio.toFixed(2) + "\n" + "Forma de pago: " + formaDePago + "\n" + "Cuotas: "+ cuotas);
                alert("Total a Pagar: $" + pago.toFixed(2) + "\n" + "Cuotas: " + cuotas + " de $" + valor_cuotas.toFixed(2));
                break;
            
        }
    }
    

}

medioDePago();
