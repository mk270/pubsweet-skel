const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const imageFieldName = "thefile"; // must match client

module.exports = app => {
  app.post('/endpoint', upload.single(imageFieldName),
           async (req, res, next) => {
    const result = "/" + req.file.path;
    console.log(result);
    console.log(req.file);
    res.send(result);
  });
}
