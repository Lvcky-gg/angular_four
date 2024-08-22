import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  log(message: string) {
    const timeStamg = new Date().toLocaleTimeString();
    console.log(`${timeStamg} : ${message}`);
  }
}
