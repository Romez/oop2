import fs from 'fs';

class PipeData {
  constructor(data) {
    this.data = data;
  }

  withoutDot() {
    this.data = this.data.filter(fileName => !fileName.startsWith('.'));
    return this;
  }

  sortNames() {
    this.data.sort();
    return this;
  }

  print() {
    console.log(this.data);
    return this;
  }

  middle() {
    const middleIndex = Math.round(this.data.length / 2);
    this.data = this.data[middleIndex];
    return this;
  }

  plural(char) {
    this.data = [this.data, char].join('');
    return this;
  }

  toUpperCase() {
    this.data = this.data.toUpperCase();
    return this;
  }
}

export default () => {
  const fileNames = fs.readdirSync('.');

  (new PipeData(fileNames))
    .withoutDot()
    .sortNames()
    .middle()
    .plural('s')
    .toUpperCase()
    .print();
};
