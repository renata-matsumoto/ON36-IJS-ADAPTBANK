import { Injectable, NotFoundException } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { PersonaFactory } from '../factories/persona.factory';
import { Manager } from '../models/manager.model';

@Injectable()
export class ManagerService {
  private readonly filePath = path.resolve('src/persona/data/manager.json');
  private idCounter: number;

  constructor(private readonly personaFactory: PersonaFactory) {
    const managers = this.readManagers();
    this.idCounter =
      managers.length > 0 ? managers[managers.length - 1].id + 1 : 1;
  }

  private readManagers(): Manager[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Manager[];
  }

  private writeManagers(managers: Manager[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(managers, null, 2), 'utf8');
  }

  createManager(id: number, fullName: string, customerId: number): Manager {
    const newManager = new Manager(id, fullName, customerId);
    const managers = this.readManagers();
    managers.push(newManager);
    this.writeManagers(managers);
    return newManager;
  }

  findAllManagers(): Manager[] {
    return this.readManagers();
  }

  findManagerById(id: number): Manager {
    const managers = this.readManagers();
    const manager = managers.find((manager) => manager.id === id);

    if (!manager) {
      throw new NotFoundException('Manager notr found.');
    }

    return manager;
  }
}
