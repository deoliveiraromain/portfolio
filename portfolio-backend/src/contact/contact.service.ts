import { Injectable } from '@nestjs/common';
import { CreateContact } from './models/create-contact';
import { Contact } from './models/contact';

@Injectable()
export class ContactService {
  findOne(_id: number) {
    throw new Error(`Method not implemented. ${_id}`);
  }

  findAll() {
    throw new Error('Method not implemented.');
  }
  private contacts: Contact[] = [];

  create(createContactDto: CreateContact): Contact {
    const newContact: Contact = {
      id: Date.now().toString(),
      ...createContactDto,
    };
    this.contacts.push(newContact);
    return newContact;
  }
}
