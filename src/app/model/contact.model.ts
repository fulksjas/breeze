import { uniqueId } from 'lodash';

export class Contact {
  contactId: string;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;

  constructor(firstName: string, lastName: string, address: string, phone: string, email: string) {
    this.contactId = uniqueId('_br');
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.email = email;
    this.phone = phone;
  }

  getFullName(): string {
    return this.firstName.concat(' ').concat(this.lastName);
  }

}
