import { TestBed } from '@angular/core/testing';

import { TodoFireService } from './todo-fire.service';

describe('TodoFireService', () => {
  let service: TodoFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
