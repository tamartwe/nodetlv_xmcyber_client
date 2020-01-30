import { Injectable } from '@angular/core';

@Injectable()
export class LoginData {

    public validLogin: boolean;
    public secretNumber: number;

    public constructor() { }

}