import { addDays, startOfMonth, getDay, addMonths } from 'date-fns';

// 'turno.frequencia' podem ser DIARIO|SEMANAL|QUINZENAL|MENSAL|BIMESTRAL|TRIMESTRAL|SEMESTRAL|ANUAL

const turnos = [
  {
    id_agenda: '12341234',
    frequencia: 'ANUAL',
    dia_semana: 'SEGUNDA-FEIRA',
    hora_inicio: '08:00',
    hora_final: '12:00',
    duracao: '30',
  },
];

const data_front = {
  id_agenda: '12341234',
  data_inicio: new Date('2024/5/27'),
  data_final: new Date('2025/11/20'),
};
let diaSemanaBanco = new Date('2000/02/24');

// const data_atual = subHours(new Date(), 3);
const data_atual = new Date('2024/5/25');

for (const turno of turnos) {
  //tratando as horas iniciais
  const [horasIniciais, minutosIniciais] = turno.hora_inicio.split(':');
  const totalMinutosInicial = Math.floor(
    Number(horasIniciais) * 60 + Number(minutosIniciais),
  );

  //tratando horas finais
  const [horasFinais, minutosFinais] = turno.hora_final.split(':');
  let totalMinutosFinais = Math.floor(
    Number(horasFinais) * 60 + Number(minutosFinais),
  );
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

  // diaSemanaBanco = subHours(diaSemanaBanco, 3);
  const diaSemanaBancoAnterior = getDay(diaSemanaBanco);

  let primeiraOcorrencia = diaSemanaBanco;

  switch (turno.frequencia) {
    case 'DIARIO':
      while (diaSemanaBanco <= data_front.data_final) {
        for (let i = 0; i < vagas; i++) {
          let hora_agendamento = String(
            Math.floor((totalMinutosInicial + Number(turno.duracao) * i) / 60),
          );
          if (hora_agendamento.length == 1) {
            hora_agendamento = '0' + hora_agendamento;
          }
          let minuto_agendamento = String(
            Math.floor(totalMinutosInicial + Number(turno.duracao) * i) % 60,
          );
          if (minuto_agendamento.length == 1) {
            minuto_agendamento = '0' + minuto_agendamento;
          }
          const tempo_agendamento =
            String(hora_agendamento) + ':' + String(minuto_agendamento);

          const id = crypto.randomUUID();
          const id_agenda = data_front.id_agenda;
          console.log('id', id);
          console.log('id_agenda', id_agenda);
          console.log('Ocorrencias', primeiraOcorrencia);
          console.log('tempo_agendamento', tempo_agendamento);
        }

        diaSemanaBanco = addDays(diaSemanaBanco, 7);
        primeiraOcorrencia = diaSemanaBanco;
      }
      break;
    case 'SEMANAL':
      while (diaSemanaBanco <= data_front.data_final) {
        for (let i = 0; i < vagas; i++) {
          let hora_agendamento = String(
            Math.floor((totalMinutosInicial + Number(turno.duracao) * i) / 60),
          );
          if (hora_agendamento.length == 1) {
            hora_agendamento = '0' + hora_agendamento;
          }
          let minuto_agendamento = String(
            Math.floor(totalMinutosInicial + Number(turno.duracao) * i) % 60,
          );
          if (minuto_agendamento.length == 1) {
            minuto_agendamento = '0' + minuto_agendamento;
          }
          const tempo_agendamento =
            String(hora_agendamento) + ':' + String(minuto_agendamento);

          const id = crypto.randomUUID();
          const id_agenda = data_front.id_agenda;
          console.log('id', id);
          console.log('id_agenda', id_agenda);
          console.log('Ocorrencias', primeiraOcorrencia);
          console.log('tempo_agendamento', tempo_agendamento);
        }

        diaSemanaBanco = addDays(diaSemanaBanco, 7);
        primeiraOcorrencia = diaSemanaBanco;
      }
      break;
    case 'QUINZENAL':
      while (diaSemanaBanco <= data_front.data_final) {
        for (let i = 0; i < vagas; i++) {
          let hora_agendamento = String(
            Math.floor((totalMinutosInicial + Number(turno.duracao) * i) / 60),
          );
          if (hora_agendamento.length == 1) {
            hora_agendamento = '0' + hora_agendamento;
          }
          let minuto_agendamento = String(
            Math.floor(totalMinutosInicial + Number(turno.duracao) * i) % 60,
          );
          if (minuto_agendamento.length == 1) {
            minuto_agendamento = '0' + minuto_agendamento;
          }
          const tempo_agendamento =
            String(hora_agendamento) + ':' + String(minuto_agendamento);

          const id = crypto.randomUUID();
          const id_agenda = data_front.id_agenda;
          console.log('id', id);
          console.log('id_agenda', id_agenda);
          console.log('Ocorrencias', primeiraOcorrencia);
          console.log('tempo_agendamento', tempo_agendamento);
        }

        diaSemanaBanco = addDays(diaSemanaBanco, 14);
        primeiraOcorrencia = diaSemanaBanco;
      }
      break;
    case 'MENSAL':
      while (diaSemanaBanco <= data_front.data_final) {
        for (let i = 0; i < vagas; i++) {
          let hora_agendamento = String(
            Math.floor((totalMinutosInicial + Number(turno.duracao) * i) / 60),
          );
          if (hora_agendamento.length == 1) {
            hora_agendamento = '0' + hora_agendamento;
          }
          let minuto_agendamento = String(
            Math.floor(totalMinutosInicial + Number(turno.duracao) * i) % 60,
          );
          if (minuto_agendamento.length == 1) {
            minuto_agendamento = '0' + minuto_agendamento;
          }
          const tempo_agendamento =
            String(hora_agendamento) + ':' + String(minuto_agendamento);

          const id = crypto.randomUUID();
          const id_agenda = data_front.id_agenda;
          console.log('id', id);
          console.log('id_agenda', id_agenda);
          console.log('Ocorrencias', primeiraOcorrencia);
          console.log('tempo_agendamento', tempo_agendamento);
        }

        diaSemanaBanco = addMonths(diaSemanaBanco, 1);

        const primeiroDiaMes = startOfMonth(diaSemanaBanco);

        const diaSemanaPrimeiroDia = getDay(primeiroDiaMes);

        let diferenca = diaSemanaBancoAnterior - diaSemanaPrimeiroDia;

        if (diferenca < 0) {
          diferenca += 7;
        }

        primeiraOcorrencia = addDays(primeiroDiaMes, diferenca);
      }
      break;
    case 'BIMESTRAL':
      while (diaSemanaBanco <= data_front.data_final) {
        for (let i = 0; i < vagas; i++) {
          let hora_agendamento = String(
            Math.floor((totalMinutosInicial + Number(turno.duracao) * i) / 60),
          );
          if (hora_agendamento.length == 1) {
            hora_agendamento = '0' + hora_agendamento;
          }
          let minuto_agendamento = String(
            Math.floor(totalMinutosInicial + Number(turno.duracao) * i) % 60,
          );
          if (minuto_agendamento.length == 1) {
            minuto_agendamento = '0' + minuto_agendamento;
          }
          const tempo_agendamento =
            String(hora_agendamento) + ':' + String(minuto_agendamento);

          const id = crypto.randomUUID();
          const id_agenda = data_front.id_agenda;
          console.log('id', id);
          console.log('id_agenda', id_agenda);
          console.log('Ocorrencias', primeiraOcorrencia);
          console.log('tempo_agendamento', tempo_agendamento);
        }

        diaSemanaBanco = addMonths(diaSemanaBanco, 2);

        const primeiroDiaMes = startOfMonth(diaSemanaBanco);

        const diaSemanaPrimeiroDia = getDay(primeiroDiaMes);

        let diferenca = diaSemanaBancoAnterior - diaSemanaPrimeiroDia;

        if (diferenca < 0) {
          diferenca += 7;
        }

        primeiraOcorrencia = addDays(primeiroDiaMes, diferenca);
      }
      break;
    case 'TRIMESTRAL':
      while (diaSemanaBanco <= data_front.data_final) {
        for (let i = 0; i < vagas; i++) {
          let hora_agendamento = String(
            Math.floor((totalMinutosInicial + Number(turno.duracao) * i) / 60),
          );
          if (hora_agendamento.length == 1) {
            hora_agendamento = '0' + hora_agendamento;
          }
          let minuto_agendamento = String(
            Math.floor(totalMinutosInicial + Number(turno.duracao) * i) % 60,
          );
          if (minuto_agendamento.length == 1) {
            minuto_agendamento = '0' + minuto_agendamento;
          }
          const tempo_agendamento =
            String(hora_agendamento) + ':' + String(minuto_agendamento);

          const id = crypto.randomUUID();
          const id_agenda = data_front.id_agenda;
          console.log('id', id);
          console.log('id_agenda', id_agenda);
          console.log('Ocorrencias', primeiraOcorrencia);
          console.log('tempo_agendamento', tempo_agendamento);
        }
        diaSemanaBanco = addMonths(diaSemanaBanco, 3);

        const primeiroDiaMes = startOfMonth(diaSemanaBanco);

        const diaSemanaPrimeiroDia = getDay(primeiroDiaMes);

        let diferenca = diaSemanaBancoAnterior - diaSemanaPrimeiroDia;

        if (diferenca < 0) {
          diferenca += 7;
        }

        primeiraOcorrencia = addDays(primeiroDiaMes, diferenca);
      }
      break;
    case 'SEMESTRAL':
      while (diaSemanaBanco <= data_front.data_final) {
        for (let i = 0; i < vagas; i++) {
          let hora_agendamento = String(
            Math.floor((totalMinutosInicial + Number(turno.duracao) * i) / 60),
          );
          if (hora_agendamento.length == 1) {
            hora_agendamento = '0' + hora_agendamento;
          }
          let minuto_agendamento = String(
            Math.floor(totalMinutosInicial + Number(turno.duracao) * i) % 60,
          );
          if (minuto_agendamento.length == 1) {
            minuto_agendamento = '0' + minuto_agendamento;
          }
          const tempo_agendamento =
            String(hora_agendamento) + ':' + String(minuto_agendamento);

          const id = crypto.randomUUID();
          const id_agenda = data_front.id_agenda;
          console.log('id', id);
          console.log('id_agenda', id_agenda);
          console.log('Ocorrencias', primeiraOcorrencia);
          console.log('tempo_agendamento', tempo_agendamento);
        }

        diaSemanaBanco = addMonths(diaSemanaBanco, 6);

        const primeiroDiaMes = startOfMonth(diaSemanaBanco);

        const diaSemanaPrimeiroDia = getDay(primeiroDiaMes);

        let diferenca = diaSemanaBancoAnterior - diaSemanaPrimeiroDia;

        if (diferenca < 0) {
          diferenca += 7;
        }

        primeiraOcorrencia = addDays(primeiroDiaMes, diferenca);
      }
      break;
    case 'ANUAL':
      while (diaSemanaBanco <= data_front.data_final) {
        for (let i = 0; i < vagas; i++) {
          let hora_agendamento = String(
            Math.floor((totalMinutosInicial + Number(turno.duracao) * i) / 60),
          );
          if (hora_agendamento.length == 1) {
            hora_agendamento = '0' + hora_agendamento;
          }
          let minuto_agendamento = String(
            Math.floor(totalMinutosInicial + Number(turno.duracao) * i) % 60,
          );
          if (minuto_agendamento.length == 1) {
            minuto_agendamento = '0' + minuto_agendamento;
          }
          const tempo_agendamento =
            String(hora_agendamento) + ':' + String(minuto_agendamento);

          const id = crypto.randomUUID();
          const id_agenda = data_front.id_agenda;
          console.log('id', id);
          console.log('id_agenda', id_agenda);
          console.log('Ocorrencias', primeiraOcorrencia);
          console.log('tempo_agendamento', tempo_agendamento);
        }

        diaSemanaBanco = addMonths(diaSemanaBanco, 12);

        const primeiroDiaMes = startOfMonth(diaSemanaBanco);

        const diaSemanaPrimeiroDia = getDay(primeiroDiaMes);

        let diferenca = diaSemanaBancoAnterior - diaSemanaPrimeiroDia;

        if (diferenca < 0) {
          diferenca += 7;
        }

        primeiraOcorrencia = addDays(primeiroDiaMes, diferenca);
      }
      break;
    default:
  }
}
