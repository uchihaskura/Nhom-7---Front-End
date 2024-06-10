import {Component, ViewEncapsulation, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ApiService} from "../../../@core/services/common";
import {finalize, Observable} from "rxjs";
import {SpinnerService} from "../spinner/spinner.service";

@Component({
  selector: 'ngx-paginator',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() apiUrl: string;
  @Input() current_page: number;
  @Input() last_page: number;
  @Output() dataList: EventEmitter<any> = new EventEmitter();
  indexPage: number = 1;
  hasPreviousPage: boolean = true;
  hasNextPage: boolean = false;
  constructor(
      private apiService: ApiService,
      private spinner: SpinnerService,
  ) {
  }
  ngOnInit() {}

  goFirstPage() {
    this.hasPreviousPage = true;
    this.hasNextPage = false;
    this.indexPage = 1;
    this.getData();
  }

  goLastPage() {
    this.hasPreviousPage = false;
    this.hasNextPage = true;
    this.indexPage = this.last_page;
    this.getData();
  }

  goPreviousPage() {
    if (this.indexPage <= this.last_page && this.indexPage > 1) {
      this.hasNextPage = false;
      this.indexPage--;
      if (this.indexPage === 1) {
        this.hasPreviousPage = true;
      }
      this.getData();
    }
  }

  goNextPage() {
    if (this.indexPage < this.last_page) {
      this.hasPreviousPage = false;
      this.indexPage++;
      if (this.indexPage === this.last_page) {
        this.hasNextPage = true;
      }
      this.getData();
    }
  }

  getPaginator(): Observable<any> {
    return this.apiService.get(this.apiUrl + '?page=' + Number(this.indexPage));
  }

  getData() {
    this.spinner.show();
    this.getPaginator()
        .pipe(
            finalize(() => {
              this.spinner.hide();
            }),
        )
        .subscribe({
          next: this.handleSuccess.bind(this),
          error: this.handleErrors.bind(this),
        });
  }

  protected handleSuccess(res) {
    this.dataList.emit(res);
  }

  protected handleErrors(res) {
    this.dataList.emit(res);
  }
}
