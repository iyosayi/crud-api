const model = require("./model");
const httpError = require("../../utils/httpError");

module.exports = function (route) {
  return route.put(async (req, res) => {
    try {
      const data = await model.updateDocument(req.body, req.params.id);
      res.json({ data: { modifiedData: data.modifiedCount } });
    } catch (error) {
      httpError(res, error);
    }
  });
};
