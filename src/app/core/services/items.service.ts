import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private apiService: ApiService) {}

  getItems() {
    return this.apiService.get('items/').pipe(
      map((data) => {
        return data;
      })
    );
  }

  createInvoice(data: any) {
    return this.apiService.post('invoice/', data).pipe(
      map((data) => {
        return data;
      })
    );
  }

  updateInvoice(id: Number, data: any) {
    return this.apiService.put(`invoice/${id}/`, data).pipe(
      map((data) => {
        return data;
      })
    );
  }

  deleteInvoice(id: Number) {
    return this.apiService.delete(`invoice/${id}/`).pipe(
      map((data) => {
        return data;
      })
    );
  }

  splitInvoice(id: Number, data: any) {
    return this.apiService.put(`invoice/split-invoice/${id}/`, data).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
