import { Observable, Observer, Subject, Subscriber } from 'rxjs';
import { CompletionTriggerKind } from 'typescript';

const obs: Observer<any> = {

    next: value => console.log(' valor:', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Completado')

};

const intervalo$ = new Observable<number>(subs => {

    const intervalID = setInterval(() => {
        subs.next(Math.random());
    }, 2000);


    return()=>{
        
        console.log("Fin del intervo mathrandom");
        
        clearInterval(intervalID);
    }

});

setTimeout(()=>{

        subject$.next("termino");
        subject$.complete();
        intervalsubject.unsubscribe();

},10000)

//1- casteo multiple
// 2- es un ResizeObserver
// 3- next error y Complete
const subject$ = new Subject();
const intervalsubject = intervalo$.subscribe(subject$);


const subs1 = subject$.subscribe(obs);
const subs2 = subject$.subscribe(obs);