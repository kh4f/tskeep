#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs'

const TARGET = 'node_modules/next/dist/lib/typescript/writeConfigurationDefaults.js'

const source = readFileSync(TARGET, 'utf8')
const patched = source.replace(/(?<=\s)var _userTsConfig_compilerOptions;/, 'if (!isFirstTimeSetup) return;$&')

writeFileSync(TARGET, patched, 'utf8')
console.log('[tskeep] Patch applied')