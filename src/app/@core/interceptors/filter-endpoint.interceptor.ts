import { HttpRequest } from '@angular/common/http';
import {EXCEPT_API_ENDPOINT} from "../config";

export function filterInterceptorRequest(req: HttpRequest<any>) {
  return EXCEPT_API_ENDPOINT.some(url => req.url.includes(url));
}
