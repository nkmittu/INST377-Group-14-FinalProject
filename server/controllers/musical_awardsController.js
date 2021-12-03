const musical_awardsGet = `SELECT a.artist_id,
  a.birth_name,
  a.stage_name,
  m.bilboard_hits, 
  m.grammy_awards 
FROM
  artists a
INNER JOIN musical_awards m 
  ON a.artist_id = m.artist_id;`;
const muscical_awardsPut = `UPDATE musical_awards
SET bilboard_hits=:bilboard_hits 
WHERE artist_id=:artist_id;`;
const musical_awardsPost = `INSERT INTO musical_awards
(awards_id,artist_id,bilboard_hits,grammy_awards)
VALUES
(:awards_id,:artist_id,:bilboard_hits,:grammy_awards);`;
const musical_awardsDelete = `DELETE FROM musical_awards
WHERE musical_awards.awards_id = :awards_id;`;
export default {
  musical_awardsGet,
  muscical_awardsPut,
  musical_awardsPost,
  musical_awardsDelete
};