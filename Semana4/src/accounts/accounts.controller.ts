import {
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
import { Customer } from 'src/persona/models/customer.model';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountService: AccountsService) {}

  @Post()
  createAccount(
    @Body('customerId') customerId: Customer['id'],
    @Body('balance') balance: number,
    @Body('type') type: AccountType,
  ) {
    return this.accountService.createAccount(customerId, balance, type);
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

  @Put(':id')
  updateAccount(
    @Param('id', ParseIntPipe) id: number,
    @Body('type') type: AccountType,
  ): Account {
    return this.accountService.updateAccount(id, type);
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
