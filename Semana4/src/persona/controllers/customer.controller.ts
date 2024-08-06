import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CustomerService } from '../services/customer.service';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get(':id/balance')
  getBalance(@Param('id') id: number) {
    try {
      const balance = this.customerService.getBalance(id);
      return { balance };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Post(':id/deposit')
  deposit(@Param('id') id: number, @Body('amount') amount: number) {
    try {
      if (amount <= 0) {
        throw new BadRequestException('The deposit amount must be positive.');
      }
      this.customerService.deposit(id, amount);
      return { message: 'Deposit successful' };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      }
      throw new NotFoundException(error.message);
    }
  }

  @Post(':id/withdraw')
  withdraw(@Param('id') id: number, @Body('amount') amount: number) {
    try {
      if (amount <= 0) {
        throw new BadRequestException(
          'The withdrawal amount must be positive.',
        );
      }
      this.customerService.withdraw(id, amount);
      return { message: 'Withdrawal successful' };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      }
      throw new NotFoundException(error.message);
    }
  }
}
