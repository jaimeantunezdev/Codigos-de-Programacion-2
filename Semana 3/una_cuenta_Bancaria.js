function crearCuentaBancaria(saldo) 
{
    let saldoInicial = saldo; 

    return{
        depositar:function(deposito){
            saldoInicial+=deposito
            return "El saldo despues del deposito es $"+saldoInicial
        }
        ,
        retirar:function(retiro){
            if(saldoInicial<retiro) return "\nUsted quiere retirar $"+(retiro)+" Pero no tiene el suficiente saldo para ese retiro";
            if(saldoInicial>=retiro){saldoInicial-=retiro;} return "\nUsted tiene el suficiente saldo para retirar,despues de retirar $"+retiro+" usted todavia cuenta con $"+(saldoInicial);
        }
        ,
        consultar:function (){
            return "\nEl saldo actual de su cuenta es $"+saldoInicial;
        }
    }
}

const c = crearCuentaBancaria(100);

console.log(c.depositar(100),c.retirar(300),c.consultar()); 


/*
Las variables locales que se tienen en el programa son saldo,saldoInicial,deposito y retiro
ya que estas se delimitan por la funcion donde estan,saldo y saldoInicial por crearCuentaBancaria(), 
deposito por depositar(),retiro por retirar().
En el caso de las variables globales solo se tiene una la cual es c y esta obtiene el objeto que devuelve 
crearCuentaBancaria().
*/