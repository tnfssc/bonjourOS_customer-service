import { Controller, Get, Post, Delete, Query, Body } from '@nestjs/common';
import { AppService, CustomerEmailOrID } from './app.service';

import { Customer } from 'db-man';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCustomer(@Query() query: CustomerEmailOrID) {
    return this.appService.getCustomer(query);
  }

  @Get('/all')
  getAllCustomers(@Query() query) {
    return this.appService.getAllCustomers(query);
  }

  @Post()
  addEditCustomer(@Body() body: Customer) {
    return this.appService.addEditCustomer(body);
  }

  @Delete()
  deleteCustomer(@Query() query: CustomerEmailOrID) {
    return this.appService.deleteCustomer(query);
  }
}
