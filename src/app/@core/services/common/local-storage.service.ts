import { Injectable } from '@angular/core';
import {AbstractStorageAdapter} from "./storage-adapter.service";

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService extends AbstractStorageAdapter {

  /**
   * Custom localStorage.getItem
   */
  getItem<T>(key: string): T {
    const data = JSON.parse(localStorage.getItem(key));
    if (data === 'undefined' || data === 'null') {
      return null;
    }
    return data;
  }

  /**
   * Custom localStorage.setItem
   */
  setItem(key: string, value: any): void {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  }

  /**
   * Custom localStorage.removeItem
   */
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
