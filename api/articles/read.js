const model = require("./model");
const httpError = require("../../utils/httpError");

module.exports = function (route) {
  return route.get(async (_, res) => {
    try {
      const data = await model.fetchAllDocuments();
      res.json({ data });
    } catch (err) {
      httpError(res, err);
    }
  });
};
