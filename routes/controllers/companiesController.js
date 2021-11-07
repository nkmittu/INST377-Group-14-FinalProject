const companyGet = `SELECT a.artist_id,
  a.birth_name,
  c.company_name
FROM
  artists a
INNER JOIN companies c 
  ON a.artist_id = c.artist_id;`;
const companyPut = `UPDATE companies
SET company_name=:company_name
WHERE artist_id=:artist_id;`;
const companyPost = `INSERT INTO companies
(company_id,artist_id,company_name,industry)
VALUES
(:company_id,:artist_id,:company_name,:indsutry);`;
const companyDelete= `DELETE FROM companies
WHERE companies.company_id = :company_id;`;
export default {
  companyGet, companyPut, companyPost, companyDelete
};

const artistsGet = `SELECT a.artist_id,
  a.birth_name
FROM
  artists a ; `;
const artistsPut = `UPDATE artists
SET artist_name=:artist_name
WHERE artist_id=:artist_id;`;
const artistsPost = `INSERT INTO artists
(artist_id)
VALUES
(:artist_id);`;
const artistsDelete= `DELETE FROM artists
WHERE artists.artist_id = :artist_id;`;
export default {
  artistsGet, artistsPut, artistsPost, artistsDelete
};