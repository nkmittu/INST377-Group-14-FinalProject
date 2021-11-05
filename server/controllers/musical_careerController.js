/* eslint-disable camelcase */
const musical_careerGet = `SELECT a.artist_id,
   a.birth_name, a.stage_name,
   m.album_count, m.genre, m.debut_date, m.tour_count
 FROM
   artists a
 INNER JOIN musical_career m
   ON a.artist_id = m.artist_id;`;
const musical_careerPut = `UPDATE musical_career
SET album_count=:album_count
SET genre=:genre
SET debut_date=:debut_date
SET tour_count=:tour_count
WHERE artist_id=:artist_id;`;
const musical_careerPost = `INSERT INTO musical_careers
(career_id,artist_id,album_count,genre, debut_date, tour_count)
VALUES
(:career_id,:artist_id,:album_count,:genre, :debut_date, :tour_count);`;
const musical_careerDelete = `DELETE FROM musical_career
WHERE m.career_id = :career_id;`;
export default {
  musical_careerGet,
  musical_careerPost,
  musical_careerPut,
  musical_careerDelete
};