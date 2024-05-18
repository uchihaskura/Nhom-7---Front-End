import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  constructor() { }

  setActiveMenu(querySelector: string, classActive: string = 'active', tagProcess: string = 'a') {
    const menuSelected = (document.querySelector(tagProcess + querySelector) as HTMLElement);
    if (menuSelected && !menuSelected.className.includes(classActive)) {
      const elementActive = (document.querySelector(tagProcess + '.' + classActive) as HTMLElement);
      if (elementActive) {
        elementActive.classList.remove(classActive);
      }
      menuSelected.classList.add(classActive);
    }
  }
}
