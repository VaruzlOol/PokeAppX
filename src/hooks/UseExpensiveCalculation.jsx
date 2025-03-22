function ExpensiveCalculation(num) {
    console.warn("Calculating...");

    for (let i = 0; i < 1000000000; i++) {
      for (let i = 0; i < 1; i++) {
        num += 1;
      }
      num += 1;
    }

    console.warn("End calculating. " + num);
    return num;
}

export default ExpensiveCalculation;