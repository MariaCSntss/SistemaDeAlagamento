import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScreenService {

  private widthSubject = new BehaviorSubject<number>(window.innerWidth);
  width$ = this.widthSubject.asObservable();

  constructor() {
    window.addEventListener('resize', () => {
      this.widthSubject.next(window.innerWidth);
    });
  }

  getWidth(): number {
    return this.widthSubject.value;
  }
}
