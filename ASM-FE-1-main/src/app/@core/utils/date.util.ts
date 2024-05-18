export class DateUtil {
  public static convertFullDate(inputDate: any) {
    const date = this.initDate(inputDate);
    if (date) {
      const month = `${date.getMonth() + 1}`;
      const day = `${date.getDate()}`;
      return inputDate ?
          `${date.getFullYear()}-${month.padStart(2, '0')}-${day.padStart(2, '0')}` :
          null;
    }

    return null;
  }

  public static convertUTC(inputDate: any) {
    const date = this.initDate(inputDate);
    if (date) {
      const month = `${date.getMonth() + 1}`;
      const day = `${date.getDate()}`;
      return inputDate ?
          new Date(`${date.getFullYear()}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`).toISOString() :
          null;
    }

    return null;
  }

  public static convertYearMonth(inputDate: any): string {
    const date = this.initDate(inputDate);
    if (date) {
      const month = `${date.getMonth() + 1}`;
      return inputDate ?
          `${date.getFullYear()}-${month.padStart(2, '0')}` :
          null;
    }

    return null;
  }

  public static initDate(d: any): Date {
    const date: any = new Date(d);
    if (date.toString() === 'Invalid Date') {
      return null;
    }

    return date;
  }

  /**
   * Compare 2 Date by operator
   * @param input1 date 1
   * @param expression operator (>, <, >=, <=, ===, !==)
   * @param input2 date 2
   */
  public static compareDate(input1: any, expression: string, input2: any): boolean {
    const date1 = this.initDate(input1);
    const date2 = this.initDate(input2);
    if (date1 && date2) {
      switch (expression) {
        case '>':
          return date1 > date2;
        case '<':
          return date1 < date2;
        case '>=':
          return date1 >= date2;
        case '<=':
          return date1 <= date2;
        case '===':
          return date1.getTime() === date2.getTime();
        case '!==':
          return date1.getTime() !== date2.getTime();
      }
    }

    return null;
  }

  public static UTCDate(year, month, date = 1, hours = 0, minute = 0, second = 0, ms = 0) {
    return new Date(Date.UTC(year, month, date, hours, minute, second, ms));
  }
}
