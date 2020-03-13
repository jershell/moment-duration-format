export default {
  durationLabelsStandard: {
    S: 'миллисекунда',
    SS: 'миллисекунд',
    s: 'секунда',
    ss: 'секунд',
    sss: 'секунды',
    m: 'минута',
    mm: 'минут',
    mmm: 'минуты',
    h: 'час',
    hh: 'часов',
    hhh: 'часа',
    d: 'день',
    dd: 'дней',
    ddd: 'дня',
    w: 'неделя',
    ww: 'недель',
    www: 'недели',
    M: 'месяц',
    MM: 'месяцев',
    MMM: 'месяца',
    y: 'год',
    yy: 'лет',
    yyy: 'года'
  },
  durationLabelsShort: {
    S: 'msec',
    SS: 'msecs',
    s: 'sec',
    ss: 'secs',
    m: 'min',
    mm: 'mins',
    h: 'hr',
    hh: 'hrs',
    d: 'dy',
    dd: 'dys',
    w: 'wk',
    ww: 'wks',
    M: 'mo',
    MM: 'mos',
    y: 'yr',
    yy: 'yrs'
  },
  durationTimeTemplates: {
    HMS: 'h:mm:ss',
    HM: 'h:mm',
    MS: 'm:ss'
  },
  durationLabelTypes: [
    { type: 'standard', string: '__' },
    { type: 'short', string: '_' }
  ],
  durationPluralKey(token, integerValueOrigin, decimalValue) {
    // Singular for a value of `1`, but not for `1.0`.
    let integerValue = integerValueOrigin;
    if (integerValueOrigin > 20) {
      integerValue = integerValueOrigin % 10;
    }
    if (integerValue === 1 && decimalValue === null) {
      return token;
    }

    if (
      (integerValue === 3 || integerValue === 2 || integerValue === 4) &&
      decimalValue === null
    ) {
      return token + token + token;
    }
    return token + token;
  }
};
