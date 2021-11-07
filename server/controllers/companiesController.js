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
const companyDelete = `DELETE FROM companies
WHERE companies.company_id = :company_id;`;
export default {
<<<<<<<< HEAD:server/controllers/companiesController.js
  companyGet,
  companyPut,
  companyPost,
  companyDelete
};
========
  companyGet, companyPut, companyPost, companyDelete
};

>>>>>>>> 0f0ad07d7df8d89c7f23ae6161d532da85277934:routes/controllers/companiesController.js
