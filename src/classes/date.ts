import { getMonth, addDays, subHours } from 'date-fns';

const turnos = [
  {
    id_agenda: '12341234',
    frequencia: 'MENSAL',
    dia_semana: 'SEGUNDA-FEIRA',
    hora_inicio: '22:00',
    hora_final: '02:00',
    duracao: '30',
  },
];

const data_front = {
  id_agenda: '12341234',
  data_inicio: new Date('2024 / 5 / 27'),
  data_final: new Date('7 / 12 / 2024'),
};
let diaSemanaBanco = new Date('2000/02/24');

const data_atual = subHours(new Date(), 3);

for (const turno of turnos) {
  //tratando as horas iniciais
  const [horasIniciais, minutosIniciais] = turno.hora_inicio.split(':');
  const totalMinutosInicial =
    Number(horasIniciais) * 60 + Number(minutosIniciais);

  //tratando horas finais
  const [horasFinais, minutosFinais] = turno.hora_final.split(':');
  let totalMinutosFinais = Number(horasFinais) * 60 + Number(minutosFinais);
  if (totalMinutosInicial > totalMinutosFinais) {
    totalMinutosFinais += 24 * 60;
  }
  const vagas =
    (totalMinutosFinais - totalMinutosInicial) / Number(turno.duracao);

  switch (turno.dia_semana) {
    case 'DOMINGO':
      diaSemanaBanco = addDays(
        data_atual,
        data_atual.getDay() <= 7
          ? 7 - data_atual.getDay()
          : 14 - data_atual.getDay(),
      );
      break;
    case 'SEGUNDA-FEIRA':
      diaSemanaBanco = addDays(
        data_atual,
        data_atual.getDay() === 1 ? 7 : 8 - data_atual.getDay(),
      );
      break;
    case 'TERCA-FEIRA':
      diaSemanaBanco = addDays(
        data_atual,
        data_atual.getDay() <= 2
          ? 2 - data_atual.getDay()
          : 9 - data_atual.getDay(),
      );
      break;
    case 'QUARTA-FEIRA':
      diaSemanaBanco = addDays(
        data_atual,
        data_atual.getDay() <= 3
          ? 3 - data_atual.getDay()
          : 10 - data_atual.getDay(),
      );
      break;
    case 'QUINTA-FEIRA':
      diaSemanaBanco = addDays(
        data_atual,
        data_atual.getDay() <= 4
          ? 4 - data_atual.getDay()
          : 11 - data_atual.getDay(),
      );
      break;
    case 'SEXTA-FEIRA':
      diaSemanaBanco = addDays(
        data_atual,
        data_atual.getDay() <= 5
          ? 5 - data_atual.getDay()
          : 12 - data_atual.getDay(),
      );
      break;
    case 'SABADO':
      diaSemanaBanco = addDays(
        data_atual,
        data_atual.getDay() <= 6
          ? 6 - data_atual.getDay()
          : 13 - data_atual.getDay(),
      );
      break;
    default:
  }
  diaSemanaBanco = subHours(diaSemanaBanco, 3);

  switch (turno.frequencia) {
    case 'MENSAL':
      while (getMonth(diaSemanaBanco) < getMonth(data_front.data_final)) {
        for (let i = 0; i < vagas; i++) {
          const hora_agendamento = turno.hora_final + Number(turno.duracao) * i;
          console.log(hora_agendamento);
        }
        // const id = crypto.randomUUID();
        // const id_agenda = data_front.id_agenda;
        // console.log('id', id);
        // console.log('id_agenda', id_agenda);
        // console.log('diaSemanaBanco', diaSemanaBanco);
        // console.log('horaAtual');

        diaSemanaBanco.setMonth(diaSemanaBanco.getMonth() + 1);
        console.log('diaSemanaBanco While', diaSemanaBanco);
      }
  }
}
