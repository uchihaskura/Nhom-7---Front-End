import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostServiceTsComponent } from './post.service.ts.component';

describe('PostServiceTsComponent', () => {
  let component: PostServiceTsComponent;
  let fixture: ComponentFixture<PostServiceTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostServiceTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostServiceTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
