// What is the difference between function scoping and block scoping. Write a code for differentiating them.

// Ans=> the main difference between function scoping and block scoping is that, if we define or declare any variables or method we can call it inside block whereas we can not call the variables and methods in function scope that are define in block scope.
// let see some example related to function scope and block scope.

function percentageGrade(mark) {
  let grade = mark
  if (grade > 90) {
    let percentage = grade
    console.log(`You received ${grade} and its ${percentage}% in overall.`)
  }

  // when this line execute, we get error cause percentage can't call outside of the block whereas grade variables can call inside if block.
  return console.log(`I am happy that i got ${percentage}% in overall.`)
}

percentageGrade(94)
