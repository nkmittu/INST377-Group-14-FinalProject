import express from 'express';

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
      console.log('you touched /companies with GET');
      res.json({data: data});
    } catch (err) {
      console.log(err);
      res.json({error: err});
    }
  })
  .put(async(req, res) => {
    try {
      console.log('you touched /companies with PUT');
      res.json({data: data});
    } catch (err) {
      console.log(err);
      res.json({error: err});
    }
  })
  .post(async(req, res) => {
    try {
      console.log('you touched /companies with POST');
      res.json({data: data});
    } catch (err) {
      console.log(err);
      res.json({error: err});
    }
  })
  .delete(async(req, res) => {
    try {
      console.log('you touched /companies with DELETE');
      res.json({data: data});
    } catch (err) {
      console.log(err);
      res.json({error: err});
    }
  });

// Nikky
router.route('/musical_career')
  .get(async(req, res) => {
    try {
      console.log('you touched /musical_career with GET');
      res.json({data: data});
    } catch (err) {
      console.log(err);
      res.json({error: err});
    }
  })
  .put(async(req, res) => {
    try {
      console.log('you touched /musical_career with PUT');
      res.json({data: data});
    } catch (err) {
      console.log(err);
      res.json({error: err});
    }
  })
  .post(async(req, res) => {
    try {
      console.log('you touched /musical_career with POST');
      res.json({data: data});
    } catch (err) {
      console.log(err);
      res.json({error: err});
    }
  })
  .delete(async(req, res) => {
    try {
      console.log('you touched /musical_career with DELETE');
      res.json({data: data});
    } catch (err) {
      console.log(err);
      res.json({error: err});
    }
  });
