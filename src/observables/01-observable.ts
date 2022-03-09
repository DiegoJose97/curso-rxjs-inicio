import { Observable, Observer } from 'rxjs';

const obs: Observer<any> = {

    next: value => console.log(' valor [next]:', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('Completado [obs]')

};

// funcionaria pero no se usa;
// const obs$ = Observable.create()
const obs$ = new Observable<String>(subs => {

    // .next le esta dando un valor del subscribe al response 
    subs.next("hola");
    subs.next("mundo");
    // .complete termina las funciones que puedan estar dentro del subcribe 
    subs.complete();
    // al darle un nuevo valor despues de a ver terminado la subscripcion este valor no se vera reflejado
    subs.next("mundo");

});

// Formas de llamar al subscribe

//--------------------------------------
// obs$.subscribe(resp =>
//     // el valor de la respuesta 
//     console.log(resp) //hola
// );

// obs$.subscribe(

//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.info('Completado')
// );

obs$.subscribe(obs);