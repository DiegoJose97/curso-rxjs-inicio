import { Observable, Observer, Subscriber } from 'rxjs';

const obs: Observer<any> = {

    next: value => console.log(' valor:', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Completado')

};

setTimeout(() => {
    // al usar el complete estamos terminando el proceso del observable con lo que nos mostrara su return
    obs.complete();
}, 4500)

const intervalos$ = new Observable<number>(suscriber => {
    var num = 0;
    // Crear un contador  1,2,3,4,5,6....
    const interval = setInterval(() => {
        //cada segundo
        num++;
        suscriber.next(num);

    }, 1000);

    return () => {
        // limpiamos el intervalo
        clearInterval(interval);
        console.log("intervalo terminado");
    }
});

const subscipcion = intervalos$.subscribe(obs);

const subscipcion2 = intervalos$.subscribe(obs);

//const subscipcion3 = intervalos$.subscribe(valor => console.log("numero", valor));
const subscipcion3 = intervalos$.subscribe(obs);

//Subscribimos las subs 2 y 3 a la primera y cuando nos dessubscribamos de esta las demas obedecerasn
subscipcion.add(subscipcion2);
subscipcion2.add(subscipcion3);

//const subscipcion3 = intervalos$.subscribe(valor => console.log("numero", valor));
setTimeout(() => {
    
    subscipcion.unsubscribe()
    // subscipcion2.unsubscribe()
    //subscipcion3.unsubscribe()
    console.log("ya no estamos subscritos al intervalos ");

}, 5000);