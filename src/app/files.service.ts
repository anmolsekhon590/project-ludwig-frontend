import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilesService {



  constructor(private http: HttpClient) {

  }

  filenames: string[] = [];



  async getData() {

    const res = await this.http.get<any>("http://192.168.0.146:8081/getAllFilenames").toPromise()
        
    return res
  }

}
