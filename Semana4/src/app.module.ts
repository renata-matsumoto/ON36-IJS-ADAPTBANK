import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module';
import { PersonaModule } from './persona/persona.module';

@Module({
  imports: [AccountsModule, , PersonaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
