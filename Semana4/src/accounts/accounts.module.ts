import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { AccountFactory } from './factories/account.factory';

@Module({
  providers: [AccountsService, AccountFactory],
  controllers: [AccountsController]
})
export class AccountsModule {}
