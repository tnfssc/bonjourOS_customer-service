import { Controller, Get, Post, Delete, Query } from '@nestjs/common';
import { AppService, CustomerEmailOrID } from './app.service';

import { Customer } from 'db-man';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCustomer(@Query() query: CustomerEmailOrID) {
    return this.appService.getCustomer(query);
  }

  @Post()
  addEditCustomer(@Query() query: Customer) {
    return this.appService.addEditCustomer(query);
  }

  @Delete()
  deleteCustomer(@Query() query: CustomerEmailOrID) {
    return this.appService.deleteCustomer(query);
  }
}
