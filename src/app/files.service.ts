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

    // For remote testing
    // let url = "http://97.108.97.207:8081/getAllFilenames";

    // For local testing
    let url = "http://192.168.0.146:8081/getAllFilenames";

    const res = await this.http.get<any>(url).toPromise()


    return res
  }

}
