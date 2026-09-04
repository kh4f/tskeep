import { test, expect } from 'bun:test'

test('should pass', () => {
	const source = `async function writeConfigurationDef...
	var _userTsConfig_compilerOptions;
	if (isFirstTimeSetup)...`

	const patched = source.replace(/var _userTsConfig_compilerOptions;/, 'if (!isFirstTimeSetup) return;$&')
	expect(patched).toBe(`async function writeConfigurationDef...
	if (!isFirstTimeSetup) return;var _userTsConfig_compilerOptions;
	if (isFirstTimeSetup)...`)
})