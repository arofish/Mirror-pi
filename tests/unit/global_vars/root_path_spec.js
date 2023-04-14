const fs = require("fs");
const path = require("path");

const root_path = path.join(__dirname, "../../..");
const version = require(`${__dirname}/../../../package.json`).version;

describe("'global.root_path' set in js/app.js", () => {
	const expectedSubPaths = ["modules", "serveronly", "js", "js/app.js", "js/main.js", "js/electron.js", "config"];

	expectedSubPaths.forEach((subpath) => {
		it(`contains a file/folder "${subpath}"`, () => {
			expect(fs.existsSync(path.join(root_path, subpath))).toBe(true);
		});
	});

	it("should not modify global.root_path for testing", () => {
		expect(global.root_path).toBe(undefined);
	});

	it("should not modify global.version for testing", () => {
		expect(global.version).toBe(undefined);
	});

	it("should expect the global.version equals package.json file", () => {
		const versionPackage = JSON.parse(fs.readFileSync("package.json", "utf8")).version;
		expect(version).toBe(versionPackage);
	});
});
