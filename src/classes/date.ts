const date = new Date();

const dayOfWeek = date.getDay();

const monthOfYear = date.getMonth();

let dayOfWeekfn: string = '';

console.log('data atual', date);
console.log('dia da semana', dayOfWeek);
console.log('mês do ano', monthOfYear);

switch (dayOfWeek) {
  case 0:
    dayOfWeekfn = 'DOMINGO';
    break;
  case 1:
    dayOfWeekfn = 'SEGUNDA-FEIRA';
    break;
  case 2:
    dayOfWeekfn = 'TERÇA-FEIRA';
    break;
  case 3:
    dayOfWeekfn = 'QUARTA-FEIRA';
    break;
  case 4:
    dayOfWeekfn = 'QUINTA-FEIRA';
    break;
  case 5:
    dayOfWeekfn = 'SEXTA-FEIRA';
    break;
  case 6:
    dayOfWeekfn = 'SÁBADO';
    break;
}

console.log('hoje é uma', dayOfWeekfn);
