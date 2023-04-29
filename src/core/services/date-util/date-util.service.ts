import * as moment from 'moment'

export class DateUtil {

  private constructor() {
    console.log('date-utils')
  }

  static create() {
    const dateUtils = new DateUtil();

    return dateUtils;
  }

  lastDayOfCurrentMouth() {
    const today = new Date(); // pega a data de hoje
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    return lastDay.getDate()
  }

  allMouth() {
    const months = new Set<string>()
    for (let i = 1; i <= 12; i++) {
      const date = new Date(Date.UTC(2000, i, 0))
      const month = date.toLocaleString('pt-BR', { month: 'long' })
      months.add(month[0].toUpperCase() + month.slice(1))
    }
    return months
  }

  hours(start = '08:00:00', end = '12:00:00', intervalMinutes = 60): string[] {
    const startTime = new Date(`January 1, 2000 ${start}`);
    const endTime = new Date(`January 1, 2000 ${end}`);

    const currentTime = new Date(startTime);
    const times = [];

    while (currentTime <= endTime) {
      const timeString = currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      times.push(timeString);
      currentTime.setTime(currentTime.getTime() + intervalMinutes * 60000);
    }

    return times
  }

  currentHour() {
    const agora = new Date();
    const hora = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    return [hora, minutos]
  }

  getMounthByNumber(arg: number) {
    let num = 1;
    for(const mouth of this.allMouth()) {
      if(num === arg) {
        return mouth
      } else {
        num++;
      }
    }

    return undefined;
  }

  allStrWeek() {
    return ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  }

  getDayStrByDayNumber(arg: number) {
    return this.allStrWeek()[arg]
  }

  allDaysOfCurrentMouth() {
    const days = new Set<string>()
    const lastDay = this.lastDayOfCurrentMouth()

    for(let i = 1; i <= lastDay; i++) {
      days.add(String(i))
    }

    return days;
  }

  getNumberMouthByText(str: string): number {
    const meses: { [key: string]: number } = {
      "Janeiro": 1,
      "Fevereiro": 2,
      "Março": 3,
      "Abril": 4,
      "Maio": 5,
      "Junho": 6,
      "Julho": 7,
      "Agosto": 8,
      "Setembro": 9,
      "Outubro": 10,
      "Novembro": 11,
      "Dezembro": 12
    };

    for(const key in meses) {
      if(key === str) {
        return meses[key]
      }
    }
    return -1
  }

  calculateTime(dateProp: string, hourProp: string) {
    const dateFormat = dateProp.split('/').reverse().join('-')

    const date = new Date(`${dateFormat}T${hourProp}`);

    const now = moment()

    const diff = moment.duration(now.diff(date));

    const yeahs = diff.years();
    const mounth = diff.months()
    const dias = diff.days();
    const minutos = diff.minutes();

    return [yeahs, mounth, dias, minutos].map(e => Math.abs(e))
  }

}
