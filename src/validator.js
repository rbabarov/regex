export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    let result = '';
    if (/\d{4,}/.test(this.name) || !/^[a-z][\w-]*[a-z]$/i.test(this.name)) {
      throw new Error('Имя не должно содержать подряд более трёх цифр, кириллицы, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире');
    } else {
      result = this.name;
    }
    return result;
  }
}