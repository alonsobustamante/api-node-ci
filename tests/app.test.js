const request = require("supertest")
const app = require("../src/app")

describe("GET /health", () => {
    it("should return status ok", async () => {
      const res = await request(app).get("/health");
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({status: "ok"});
    });

    it('GET /version should return version', async () => {
      const res = await request(app).get('/version');
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({ version: '1.0.0' });
    });
});