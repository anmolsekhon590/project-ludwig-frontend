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
    let url = "http://99.244.63.14:8081/getAllFilenames";

    // For local testing
    // let url = "http://10.0.0.1:8081/getAllFilenames";

    const res = await this.http.get<any>(url).toPromise()


    return res
  }

}
