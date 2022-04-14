import { Injectable } from '@nestjs/common';

import db from '../db-man';
import { Customer, User } from '../db-man';

export type CustomerEmailOrID = {
  id: Pick<Customer, 'id'>['id'];
  email?: Pick<User, 'email'>['email'];
};

@Injectable()
export class AppService {
  async getCustomer({ id, email }: CustomerEmailOrID) {
    if (id) return await db.customer.findUnique({ where: { id } });
    if (email) {
      const { id } = await db.user.findUnique({ where: { email } });
      return await db.customer.findUnique({ where: { id } });
    }
  }
  async addEditCustomer({ id, ...customer }: Customer) {
    return await db.customer.upsert({
      where: { id },
      create: { id, ...customer },
      update: { ...customer },
    });
  }
  async deleteCustomer({ id, email }: CustomerEmailOrID) {
    if (id) return await db.customer.delete({ where: { id } });
    if (email) {
      const { id } = await db.user.findUnique({ where: { email } });
      return await db.customer.delete({ where: { id } });
    }
  }
}
