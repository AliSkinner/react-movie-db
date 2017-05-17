import expect from 'expect';

import movieAPI from 'theMovieDB';


describe('movieAPI', () => {

  it('should exist', () => {
    expect(movieAPI).toExist();
  });

  describe('Search', () => {

    it('should return data for valid searchTerm', () => {
      let query = 'jaws';

      movieAPI.search(query).then((res) => {
        expect(res.status).toEqual(200);
        expect(res.data.results.length).toBeGreaterThan(1);
      });
    });

  });


});
