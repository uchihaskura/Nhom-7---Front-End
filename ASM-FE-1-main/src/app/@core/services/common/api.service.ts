import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {APP_CONFIG, LOCALSTORAGE_KEY} from "../../config";


@Injectable({
    providedIn: 'root',
})
export class ApiService {

    constructor(
        private readonly http: HttpClient,
    ) { }

    /**
     * @method GET
     * @param apiUrl URL reference to API
     * @param parameter Ex: [param1, param2, param3] => result: apiUrl/param1/param2/param3
     * @param customHeaders OPTIONAL: another header value you want to customize
     */
    get<T>(apiUrl: string, parameter: any[] = [], customHeaders?: HttpHeaders): Observable<T> {
        parameter.forEach(p => {
            apiUrl += ('/' + p);
        });

        return this.http.get<T>(
            apiUrl, { headers: customHeaders ?? this.getHeaders() },
        );
    }

    /**
     * @method POST
     * @param apiUrl URL reference to API
     * @param body request body
     * @param customHeaders OPTIONAL: another header value you want to customize
     */
    post<T>(apiUrl: string, body?: T, customHeaders?: HttpHeaders): Observable<T> {
        return this.http.post<T>(
            apiUrl,
            body ? JSON.stringify(body) : {},
            { headers: customHeaders ?? this.getHeaders() },
        );
    }

  /**
   * @method PATCH
   * @param apiUrl URL reference to API
   * @param body request body
   * @param customHeaders OPTIONAL: another header value you want to customize
   */
  patch<T>(apiUrl: string, body?: T, customHeaders?: HttpHeaders): Observable<T> {
    return this.http.patch<T>(
      apiUrl,
      body ? JSON.stringify(body) : {},
      { headers: customHeaders ?? this.getHeaders() },
    );
  }

    /**
     * @method PUT
     * @param apiUrl URL reference to API
     * @param body request body
     * @param customHeaders OPTIONAL: another header value you want to customize
     */
    put<T>(apiUrl: string, body?: T, customHeaders?: HttpHeaders): Observable<T> {
        return this.http.put<T>(
            apiUrl,
            body ? JSON.stringify(body) : {},
            { headers: customHeaders ?? this.getHeaders() },
        );
    }

    /**
     * @method DELETE
     * @param apiUrl URL reference to API
     * @param parameter Ex: [param1, param2, param3] => result: apiUrl/param1/param2/param3
     * @param customHeaders OPTIONAL: another header value you want to customize
     */
    delete(apiUrl: string, parameter: any[] = [], customHeaders?: HttpHeaders) {
        if (parameter && parameter.length > 0) {
            parameter.forEach((p: string) => {
                apiUrl += ('/' + p);
            });
        }
        return this.http.delete(
            apiUrl,
            { headers: customHeaders ?? this.getHeaders() },
        );
    }

    /// -------------------S3 UPLOAD FILE----------------------------
    /**
     * @method PUT
     * @param apiUrl URL reference to API
     * @param file a file that needs to upload
     * @param header custom header
     */
    uploadFileS3(apiUrl: string, file: File, header: any) {
        const headers = new HttpHeaders(header);
        return this.http.put(apiUrl, file, {
            reportProgress: true,
            observe: 'events',
            headers,
        }).pipe(
            map(event => this.getEventMessage(event, file)),
        );
    }

    private getEventMessage(event: HttpEvent<any>, file: File) {
        switch (event.type) {
            case HttpEventType.UploadProgress:
                const percentDone = Math.round(100 * event.loaded / event.total);
                return { status: 'progress', message: percentDone };
            case HttpEventType.Response:
                return event.body;
            default:
                return `File "${file.name}" surprising upload event: ${event.type}.`;
        }
    }
    /// -------------------END S3 UPLOAD FILE-------------------

    /**
     * Common header for each API
     */
    private getHeaders(): HttpHeaders {
        return new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'Authorization': this.getToken() ?? '',
            'Module': APP_CONFIG.module,
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Origin': '*',
          },
        );
    }

  public getToken() {
    return localStorage.getItem(LOCALSTORAGE_KEY.token);
  }
}
