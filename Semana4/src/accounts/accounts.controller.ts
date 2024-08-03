import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { AccountType } from './enums/account-type.enum';
import { AccountsService } from './accounts.service';
import { Account } from './models/account.interface';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountService: AccountsService) {}

  @Post()
  createAccount(
    @Body('customerId') customerId: number,
    @Body('balance') balance: number,
    @Body('type') type: AccountType,
    @Body('isManager') isManager: boolean,
  ) {
    if (typeof isManager !== 'boolean') {
      throw new BadRequestException('Invalid isManager flag.');
    }
    return this.accountService.createAccount(
      customerId,
      balance,
      type,
      isManager,
    );
  }

  @Post(':id/deposit')
  deposit(@Param('id') id: number, @Body('amount') amount: number): Account {
    if (amount <= 0) {
      throw new BadRequestException('O valor do depósito deve ser positivo.');
    }
    return this.accountService.deposit(id, amount);
  }

  // Endpoint para retirar dinheiro
  @Post(':id/withdraw')
  withdraw(@Param('id') id: number, @Body('amount') amount: number): Account {
    if (amount <= 0) {
      throw new BadRequestException('O valor da retirada deve ser positivo.');
    }
    return this.accountService.withdraw(id, amount);
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Account {
    return this.accountService.findById(id);
  }

  @Get()
  findAll(): Account[] {
    return this.accountService.findAll();
  }

  @Get('total/balance')
  getTotalBalance(): { totalBalance: number } {
    const totalBalance = this.accountService.getTotalBalance()
    return { totalBalance };
  }

  @Get(':id/balance')
  getBalanceByAccountId(@Param('id') id: number): number {
    return this.accountService.getBalanceByAccountId(id);
  }

  @Get('types')
  getAccountTypes(): string[] {
    return this.accountService.getAccountType();
  }

  @Patch(':id/balance-update')
  updateBalance(
    @Param('id', ParseIntPipe) id: number,
    @Body('balace') newBalace: number,
  ): Account {
    const updateBalance = this.accountService.updateBalance(id, newBalace);
    return updateBalance;
  }

  @Put(':id/type')
  updateAccountType(
    @Param('id', ParseIntPipe) id: number,
    @Body('type') newType: AccountType,
  ): Account {
    return this.accountService.updateAccountType(id, newType);
  }

  @Delete(':id')
  deleteAccount(@Param('id', ParseIntPipe) id: number): void {
    return this.accountService.deleteAccount(id);
  }
}
