function showMyName(name: string): void {
  console.log(name);
}

showMyName("John");

function square(a: number): number {
  return a * a;
}

const result = square(10);

function sum(title: string, ...numbers: number[]): string {
  return title + " = " + numbers.reduce((sum, num) => sum + num, 0);
}

const sumResult = sum("Numbers", 1, 6, 10);

function executeFunc(
  func: (title: string, age: number, hobbies: string[]) => boolean,
): void {
  const title = "Lorem Ipsum";
  func(title, 24, ["Sport", "Movies"]);
}

executeFunc((title, age, hobbies) => {
  return true;
});
