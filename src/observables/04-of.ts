import { of } from 'rxjs';

// const obs$ = of(1, 2, 3, 4, 5, 6);
// const obs$ = of([1, 2, 3, 4, 5, 6]);
const obs$ = of<any>([1, 2], true, function () { return "hola" }, new Promise((resolve, reject) => {
}));
console.log("inicio del obs$");

obs$.subscribe(valor => console.log(valor), null,
    () => console.log("terminamos la secuencia del of")
);
console.log("fin del obs$");
