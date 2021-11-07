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
}