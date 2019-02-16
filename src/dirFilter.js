import fs from 'fs';

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

  fileNames
  |> withoutDot
  |> sortNames
  |> middle
  |> plural('s')
  |> toUpperCase
  |> console.log;
};
