import { InMemoryDbService } from 'angular-in-memory-web-api';
import {
  Employees,
  Employee,
} from 'src/app/dashboard/employees/employee.interface';
import { Projects } from 'src/app/dashboard/projects/project.interface';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees: Employees = [];

    while (employees.length < 10) {
      employees.push(this.getRandomPerson());
    }

    const projects: Projects = [];
    ['Orion', 'Hydra', 'Loki', 'Taurus'].forEach(project => {
      const client = this.getRandomPerson();

      projects.push({
        id: this.genId(),
        name: project,
        clientName: `${client.name} ${client.lastName}`,
        size: 0,
        employeeIds: [],
      });
    });

    return {
      employees,
      projects,
    };
  }

  private genId() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + s4() + s4();
  }

  private getRandomPerson(): Employee {
    const rnd = items => items[Math.floor(Math.random() * items.length)];
    const names = [
      'Mateo',
      'María',
      'Daniel',
      'Sofía',
      'Pablo',
      'Catalina',
      'Alvaro',
      'Daniela',
      'David',
      'Valentina',
      'Diego',
      'Fernanda',
    ];

    const lastNames = [
      'Rodríguez',
      'Gómez',
      'López',
      'Valencia',
      'García',
      'Herrera',
      'Ramírez',
      'Romero',
      'Arias',
      'Díaz',
      'Restrepo',
      'Torres',
      'Rojas',
      'Vargas',
      'Moreno',
      'Quintero',
      'Parra',
      'Cárdenas',
      'Jaramillo',
    ];

    const age = Math.floor(Math.random() * 32) + 18;
    const first = rnd(lastNames);
    const second = rnd(lastNames.filter(lastName => lastName !== first));

    return {
      id: this.genId(),
      name: rnd(names),
      lastName: `${first} ${second}`,
      birthday: this.getBirthDay(age),
      projectId: null,
      age,
    };
  }

  private getBirthDay(age): string {
    const year = new Date(Date.now()).getFullYear();
    const random = (n1, n2) => Math.floor(Math.random() * n2) + n1;
    const month = random(1, 12);
    const day = random(1, 30);
    const date = new Date(`${year - age}/${month}/${day}`);
    return date.toDateString();
  }
}
