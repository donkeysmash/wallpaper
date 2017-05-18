import express from 'express';
import {fetchSrcUrl} from '../wallpaper';

// TODO put it in config or let client side handle it
const DEFAULT_IMG_URL = process.env.DEFAULT_IMG_URL || 'http://dreamicus.com/data/donkey/donkey-01.jpg';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res, next) => {
  // const locale = req.locale.toString();

  fetchSrcUrl()
  .then((result) => {
    res.render('index', {
      title: 'Wallpaper',
      imgUrl: result.webformatURL
    });
  }).catch((rejected) => {
    // TODO ugly repetition
    res.render('index', {
      title: 'Wallpaper',
      imgUrl: DEFAULT_IMG_URL
    })
  });
});

export default router;
