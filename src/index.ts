import { interval, timer } from "rxjs";

const obs$ = {
    next: val => console.log(val),
    complete: () => console.log("completado")
    
}

const hoyen5 = new Date();
hoyen5.getSeconds()+5;
const interval$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(2000,1000);
const timer$ = timer(hoyen5);

console.log("inicio");

//interval$.subscribe(obs$);
timer$.subscribe(obs$);
console.log("fin");
