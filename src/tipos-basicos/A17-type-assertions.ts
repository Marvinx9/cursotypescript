/* ---- Recomendado ---- */
// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/* ---- Não Recomendado ---- */
//Type Assertion
const body3 = document.querySelector('body') as unknown as number;
console.log(body3 / 2);

// Non-Null assertion (!)
const body4 = document.querySelector('body')!;
body4.style.background = 'red';
