import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable, Subject } from 'rxjs';
import { Contact } from 'src/app/model/contact.model';
import { MockHttpClientService } from 'src/app/services/mockHttpClient.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  constructor(private mockHttpClientService: MockHttpClientService) { }

  private static Contacts: Contact[];
  private contactsSource = new Subject<Contact[]>();
/**
 * provides a broadcast and access to when contact are modified
 *
 * @returns {Observable<Contact[]>}
 * @memberof ContactsService
 */
getContactsSource(): Observable<Contact[]> {
    return this.contactsSource.asObservable();
  }

  /**
   * retrieve the contacts from sor. update subscribers to changes
   *  
   */
  loadContacts(): void {
    // if working with a real http client, we would prob not have these kind of inputs
    this.mockHttpClientService.getContacts(Math.floor(Math.random() * (100 - 25 + 1) + 25)).subscribe((contacts: Contact[]) => {
      ContactsService.Contacts = contacts;
      this.contactsSource.next(contacts);
    },
      error => {
        /* can ever image getting here with this code but...
         * and this should be a proper error handling, communicating with some
         * log repo (splunk) for tracking/anaylsis reasons so clients never has to
         * call and tell me about the problem.  I already know about it and fixing it */
        console.log('Error retrieving contacts.  Error is: ', error);
      });
  }

  /**
   * update individual contact in static list and notify listeners of changes
   *
   * @param {Contact} contact
   * @memberof ContactsService
   */
  saveContact(contact: Contact): void {
    // normally we would do use a http service to handle the PUT or POST based on the object state
    const index = ContactsService.Contacts.findIndex((cntct: Contact) => cntct.contactId === contact.contactId);
    if (index > -1) {
      // PUT
      ContactsService.Contacts[index] = contact;
    } else {
      // POST
      ContactsService.Contacts.push(contact);
    }
    // dont feel comfortable with this, but for this assignment...
    this.contactsSource.next(_.sortBy(ContactsService.Contacts, ['firstName', 'lastName']));
  }
/**
 * remove the contact from the static list and notify listenrs of chagnes
 *
 * @param {Contact} contact
 * @memberof ContactsService
 */
deleteContact(contact: Contact): void {
    // normally we would do use a http service to handle the PUT or POST based on the object state
    const index = ContactsService.Contacts.findIndex((cntct: Contact) => cntct.contactId === contact.contactId);
    ContactsService.Contacts.splice(
      index,
      1);
    this.contactsSource.next(ContactsService.Contacts);
  }
}
