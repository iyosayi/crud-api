const model = require("./model");
const httpError = require("../../utils/httpError");

module.exports = function (route) {
  return route.post(async (req, res) => {
    try {
      const data = await model.insertDocument(req.body);
      res.json({ data: { insertId: data.insertedId } });
    } catch (err) {
      httpError(res, err);
    }
  });
};
