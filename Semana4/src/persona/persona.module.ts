import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customer.controller';
import { CustomerService } from './services/customer.service';
import { ManagerService } from './services/manager.service';
import { ManagerController } from './controllers/manager.controller';
import { AccountsService } from 'src/accounts/accounts.service';
import { PersonaFactory } from './factories/persona.factory';
import { AccountFactory } from 'src/accounts/factories/account.factory';

@Module({
  providers: [CustomerService, ManagerService, AccountsService, PersonaFactory, AccountFactory],
  controllers: [CustomerController, ManagerController],
})
export class PersonaModule {}
