//Encadeamento opcional e Operador de coalescência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O título',
  texto: 'O texto',
};

console.log(documento.data?.toDateString() ?? 'Ixi, não existe data!');
console.log(undefined ?? '1-Ixi, não existe data!');
console.log(null ?? '2-Ixi, não existe data!');
console.log(false ?? '3-Ixi, não existe data!');
console.log(0 ?? '4-Ixi, não existe data!');
console.log('' ?? '5-Ixi, não existe data!');
