import expect from 'expect';

import movieAPI from 'theMovieDB';


describe('movieAPI', () => {

  it('should exist', () => {
    expect(movieAPI).toExist();
  });

  describe('Search', () => {

    it('should return data for valid searchTerm', (done) => {
      let query = 'jaws';

      movieAPI.search(query).then((res) => {
        expect(res.status).toEqual(200);
        expect(res.data.results.length).toBeGreaterThan(1);
      });
      done();
    });

    it('should return 200 status & empty result set for not found movie', (done) => {
      let query = '!@£dsakj98r';
      movieAPI.search(query).then((res) => {
        expect(res.status).toEqual(200);
        expect(res.data.results.length).toBe(0);
      });
      done();
    });

  });

  describe('getDetails', () => {

    it('should return searched movie for valid ID', (done) => {
      let query = 578;
      movieAPI.getDetails(query).then((res) => {
        expect(res.data.id).toEqual(query);
        expect(res.status).toEqual(200);
      });
      done();
    });

    it('should return 404 for invalid movie ID', (done) => {
      let query = '!@£dsakj98r';
      movieAPI.getDetails(query).then((res) => {
        expect(res.status).toEqual(404);
      });
      done();
    });

  });


});
