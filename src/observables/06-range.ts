import { asyncScheduler, of, range } from "rxjs";

//mostrara 1,2,3,4,5 de forma asincrona 
const src$ = range(1, 5, asyncScheduler);

console.log("inicio");

src$.subscribe(console.log);

console.log("fin");