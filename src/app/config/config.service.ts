import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  public BASE_URL = "http://localhost:5000/api/";

  constructor() { }

}
