"use strict";
var import_getINSEEApiAccessToken = require("../../../application/getINSEEApiAccessToken.js");
var import_renewINSEEApiAccessToken = require("../../../application/renewINSEEApiAccessToken.js");
test("renewINSEEApiAccessToken", async () => {
  await (0, import_renewINSEEApiAccessToken.renewINSEEApiAccessToken)();
  const accessToken = await (0, import_getINSEEApiAccessToken.getINSEEApiAccessToken)();
  expect(accessToken).toBeDefined();
});
//# sourceMappingURL=renewINSEEApiAccessToken.test.js.map
