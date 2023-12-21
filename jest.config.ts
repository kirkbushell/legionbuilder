import { pathsToModuleNameMapper } from "ts-jest"
import { compilerOptions } from "./tsconfig.json"

module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	moduleDirectories: ["node_modules", "<rootDir>"],
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
}
