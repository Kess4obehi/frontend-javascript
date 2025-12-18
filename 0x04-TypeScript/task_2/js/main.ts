interface DirectorInterface {

workFromHome(): string
getCoffeeBreak(): string
workDirectorTasks(): string
}

interface TeacherInterface {

workFromHome(): string
getCoffeeBreak(): string
workTeacherTasks(): string
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
workFromHome(): string {

  return 'Cannot work from home';
} 
getCoffeeBreak(): string {

  return 'Cannot have a break';
} 
workTeacherTasks(): string {

  return 'Getting to work';
} 
}

type Employee = Director | Teacher;

export function createEmployee(salary: number | string): Employee {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
    return new Director();
  }

export function isDirector(employee: Employee): employee is Director{
return employee instanceof Director;
}

export function executeWork(employee: Employee): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks(); 
  }
return employee.workTeacherTasks();
}

type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  return "Teaching History";
}