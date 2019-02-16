import fs from 'fs';

class PipeData {
  constructor(data) {
    this.data = data;
  }

  pipe(fn) {
    return new PipeData(fn(this.data));
  }
}

export default () => {
  const fileNames = fs.readdirSync('.');

  const withoutDot = names => names.filter(fileName => !fileName.startsWith('.'));
  const sortNames = names => names.sort();
  const middle = (names) => {
    const middleIndex = Math.round(names.length / 2);
    return names[middleIndex];
  };
  const plural = char => name => [name, char].join('');
  const toUpperCase = name => name.toUpperCase();

  (new PipeData(fileNames))
    .pipe(withoutDot)
    .pipe(sortNames)
    .pipe(middle)
    .pipe(plural('s'))
    .pipe(toUpperCase)
    .pipe(console.log);
};
