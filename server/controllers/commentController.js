module.exports = {
  getAllComments(req, res) {
    const db = req.app.get("db");
    db.all_comments()
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
