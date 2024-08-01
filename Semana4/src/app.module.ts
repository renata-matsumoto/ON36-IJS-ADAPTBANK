import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module';
import { CustomerModule } from './customer/customer.module';
import { ManagerModule } from './manager/manager.module';

@Module({
  imports: [AccountsModule, CustomerModule, ManagerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
