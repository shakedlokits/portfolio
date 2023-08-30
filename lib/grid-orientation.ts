export enum GridOrientation {
  Square = 'square',
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

export const calculateGridOrientation = (index: number, length: number): GridOrientation => {
  // zero-shot if the list is longer than the last number in the current index's modulo 6 space
  // and it's not the congruent to 1 modulo 6
  const thresholdIndicator = 1 - Math.min(Math.max((index - (index % 6) + 6 - length) * (index % 6), 0), 1);
  // const thresholdIndicator = Math.min(Math.max((index - (index % 6) + 6 - length) ** ((index % 6) / 2), 0), 1);

  // zero-shot if odd number
  const rowIndicator = (1 - (-1) ** index) / 2;

  // zero-shot if congruent to 1 or 5 modulo 6
  // https://oeis.org/A007310
  const columnIndicator = 1 - Math.min((((index - 1) % 6) * ((index - 5) % 6)) ** 2, 1);

  // 0 => square, 1 => horizontal rectangle, 2 => vertical rectangle
  const gridDimensionIndicator = (thresholdIndicator * (rowIndicator + columnIndicator)) as 0 | 1 | 2;

  // return the orientation
  switch (gridDimensionIndicator) {
    case 0:
      return GridOrientation.Square;
    case 1:
      return GridOrientation.Horizontal;
    case 2:
      return GridOrientation.Vertical;
  }
};
