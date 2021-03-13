import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { of } from 'rxjs';

import { Observable } from 'rxjs/internal/Observable';
import { Contact } from 'src/app/model/contact.model';
import { animals, colors, names, NumberDictionary, uniqueNamesGenerator } from 'unique-names-generator';


@Injectable({
  providedIn: 'root'
})
export class MockHttpClientService {

  constructor() { }
  
  /**
   * given a number, it will simulate doing an http call to get contacts
   * that are then used in our contact list
   *
   * @param {number} numConcats
   * @returns {Observable<Contact[]>}
   * @memberof MockHttpClientService
   */
  getContacts(numConcats: number): Observable<Contact[]> {
    // normally we would do an API call for data.  for the sake for this, 
    // we are going to do random generations
    const contacts: Contact[] = [];
    let i = 1;
    while (i <= numConcats) {
      const firstName = this.generateFirstName();
      const lastName = this.generateLastName();
      contacts.push(new Contact(firstName, lastName, this.generateAddress(),
        this.generatePhoneNumber(), this.generateEmail(firstName, lastName)));
      i++;
    }
    // mimic the API soring the data for us before we get it
    return of(_.sortBy(contacts, ['firstName', 'lastName']));
  }

  /**
   * using a generator, get a first name
   *
   * @private
   * @returns {string}
   * @memberof MockHttpClientService
   */
  private generateFirstName(): string {
    const name = uniqueNamesGenerator({
      dictionaries: [names],
      style: 'capital'
    });
    return name;
  }

  /**
   * using a generator, get a last name
   *
   * @private
   * @returns {string}
   * @memberof MockHttpClientService
   */
  private generateLastName(): string {
    const name = uniqueNamesGenerator({
      dictionaries: [colors, animals],
      separator: ''
    });
    return name.charAt(0).toUpperCase().concat(name.slice(1));
  }

  /**
   * using a generator, get a street number and name 
   *
   * @private
   * @returns {string}
   * @memberof MockHttpClientService
   */
  private generateAddress(): string {
    const address = Math.floor(Math.random() * (900 - 100 + 1) + 100).toString();
    const street = uniqueNamesGenerator({ dictionaries: [colors] });
    const type = uniqueNamesGenerator({ dictionaries: [['Street', 'Drive', 'Ave', 'Plaze']] });
    return address.concat(' ').concat(street.charAt(0).toUpperCase()).concat(' ').concat(type);
  }

  /**
   * using a generator, get a phone number
   *
   * @private
   * @returns {string}
   * @memberof MockHttpClientService
   */
  private generatePhoneNumber(): string {
    const areaCode = uniqueNamesGenerator({ dictionaries: [NumberDictionary.generate({ min: 100, max: 999 }) ]});
    const centralOffice = uniqueNamesGenerator({ dictionaries: [NumberDictionary.generate({ min: 100, max: 999 }) ]});
    const lineNumber = uniqueNamesGenerator({ dictionaries: [NumberDictionary.generate({ min: 1000, max: 9999 }) ]});
    return new Array(areaCode, centralOffice, lineNumber).join('-');
  }

  /**
   * using name inputs, generate an email address
   *
   * @private
   * @param {string} firstName
   * @param {string} lastName
   * @returns {string}
   * @memberof MockHttpClientService
   */
  private generateEmail(firstName: string, lastName: string): string {
    return firstName.concat('_').concat(lastName).concat('@').concat(uniqueNamesGenerator({ dictionaries: [colors] })).concat('.com');
  }
}
