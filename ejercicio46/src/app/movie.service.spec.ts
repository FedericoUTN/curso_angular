import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  
  let service: MovieService;
  let size : number;
  beforeEach(() => {
    TestBed.configureTestingModule({
    
    });
    service = TestBed.get(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('ejercicio46', ()=>{
    size = service.castMembers.length + 1;
    service.addCastMember('aa', 'bb');
    expect(service.castMembers.length).toEqual(size)
  })

  afterEach(()=>{
    service.castMembers = [];
  })

});
