export const calculateTotalBoxes = (boxes: string) => {
  if (boxes) {
    const arrayBoxes: string[] = boxes.split(',');
    const sum: number = arrayBoxes.reduce(
      (accumulator: number, currentBox: string) => Number(accumulator) + Number(currentBox),
      0,
    );

    return sum;
  }

  return 0;
};
