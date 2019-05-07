import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import {HttpClient} from '@angular/common/http';
import {IContact} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  constructor(http: HttpClient) { super(http); }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  login(username: string, password: string): void {
    this.post('http://localhost:8000/api/login/', {
      username,
      password
    })
      .then(res => {
        localStorage.setItem('token', res.token);
      });
  }

  logout(): void {
    this.post('http://localhost:8000/api/logout/', {}).then(() => {
      localStorage.clear();
    });
  }

  getContacts(): Promise<IContact[]> {
    return this.get('http://localhost:8000/api/contacts/', {});
  }

  createContact(name: string, phone: string): Promise<IContact> {
    return this.post('http://localhost:8000/api/contacts/', {
      name,
      phone
    });
  }

  getContact(id: number): Promise<IContact> {
    return this.get(`http://localhost:8000/api/contacts/${id}/`, {});
  }

  updateContact(contact: IContact): Promise<IContact> {
    return this.put(`http://localhost:8000/api/posts/${contact.id}/`, {
      name: contact.name,
      phone: contact.phone
    });
  }

  deleteContact(id: number): Promise<any> {
    return this.delet(`http://localhost:8000/api/posts/${id}/`, {});
  }
}
