export function median(numbers: number[]): number {
    if (numbers.length === 0) {
      throw new Error("Cannot calculate median of an empty list");
    }
  
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    const middle = Math.floor(sortedNumbers.length / 2);
  
    if (sortedNumbers.length % 2 === 1) {
      return sortedNumbers[middle]; 
    } else {
      return (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2; 
    }
  }
  