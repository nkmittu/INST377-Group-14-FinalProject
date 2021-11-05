/* eslint-disable camelcase */
import express from 'express';
import sequelize from 'sequelize';
import companyControllers from '../server/controllers/companiesController.js';
import musical_careerController from '../server/controllers/musical_careerController.js';

const router = express.Router();

// Elvis
router.route('/artists')
  .get(async(req, res) => {
    try {
      console.log('you touched /artists with GET');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: 'something went wrong'});
    }
  })

  .put(async(req, res) => {
    try {
      console.log('you touched /artists with PUT');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })

  .post(async(req, res) => {
    try {
      console.log('you touched /artists with POST');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })

  .delete(async(req, res) => {
    try {
      console.log('you touched /artists with DELETE');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  });

// Sean
router.route('/companies')
  .get(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(companyControllers.companyGet, {
        type: sequelize.QueryTypes.SELECT
      });
      console.log('you touched /companies with GET');
      res.json(result);
    } catch (err) {
      console.log(err);
      res.json({error: err});
    }
  })
  .put(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(companyControllers.companyPut, {
        replacements: { company_name: req.company_name, artist_id: req.artist_id },
        type: sequelize.QueryTypes.UPDATE
      });
      console.log('you touched /companies with PUT');
      res.json(result);
    } catch (err) {
      console.log(err);
      res.json({error: err});
    }
  })
  .post(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(companyControllers.companyPost, {
        replacements: {
          company_id: req.company_id,
          artist_id: req.artist_id,
          company_name: req.company_name,
          industry: req.industry
        },
        type: sequelize.QueryTypes.INSERT
      });
      console.log('you touched /companies with POST');
      res.json(result);
    } catch (err) {
      console.log(err);
      res.json({error: err});
    }
  })
  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(companyControllers.companyDelete, {
        replacements: { company_name: req.company_id, artist_id: req.company_id },
        type: sequelize.QueryTypes.DELETE
      });
      console.log('you touched /companies with DELETE');
      res.json(result);
    } catch (err) {
      console.log(err);
      res.json({error: err});
    }
  });

// Nikky
router.route('/musical_career')
  .get(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(musical_careerController.musical_careerGet, {
        type: sequelize.QueryTypes.SELECT
      });
      console.log('you touched /musical_career with GET');
      res.json({data: data});
    } catch (err) {
      console.log(err);
      res.json({error: err});
    }
  })
  .put(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(musical_careerController.musical_careerPut, {
        replacements: {
          album_count: req.album_count,
          genre: req.genre,
          debut_date: req.debut_date,
          tour_count: req.tour_count,
          artist_id: req.artist_id
        },
        type: sequelize.QueryTypes.UPDATE
      });
      console.log('you touched /musical_career with PUT');
      res.json({data: data});
    } catch (err) {
      console.log(err);
      res.json({error: err});
    }
  })
  .post(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(musical_careerController.musical_careerPost, {
        replacements: {
          career_id: req.career_id,
          artist_id: req.artist_id,
          album_count: req.album_count,
          genre: req.genre,
          debut_date: req.debut_date,
          tour_count: req.tour_count
        },
        type: sequelize.QueryTypes.INSERT
      });
      console.log('you touched /musical_career with POST');
      res.json({data: data});
    } catch (err) {
      console.log(err);
      res.json({error: err});
    }
  })
  .delete(async(req, res) => {
    try {
      const result = await db.sequelizeDB.query(musical_careerController.musical_careerDelete, {
        replacements: { career_id: req.career_id },
        type: sequelize.QueryTypes.DELETE
      });
      console.log('you touched /musical_career with DELETE');
      res.json({data: data});
    } catch (err) {
      console.log(err);
      res.json({error: err});
    }
  });

// Thitna
router.route('/musical_awards')
  .get(async(req, res) => {
    try {
      console.log('you touched /musical_awards with GET');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })

  .put(async(req, res) => {
    try {
      console.log('you touched /musical_awards with PUT');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })

  .post(async(req, res) => {
    try {
      console.log('you touched /musical_awards with POST');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })

  .delete(async(req, res) => {
    try {
      console.log('you touched /musical_awards with DELETE');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  });

export default router;