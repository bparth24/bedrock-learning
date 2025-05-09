# bedrock-learning

1. [example1-basic](./example1-basic/README.md)

## deprecated-warnings

### `bedrock-express` module

Deprecated Warnings

```bash
parthbhatt@localhost example1-basic % npm install bedrock-express
npm warn deprecated uid-number@0.0.6: This package is no longer supported.
npm warn deprecated lodash.get@4.4.2: This package is deprecated. Use the optional chaining (?.) operator instead.
npm warn deprecated lodash.template@4.5.0: This package is deprecated. Use https://socket.dev/npm/package/eta instead.
npm warn deprecated string-similarity@4.0.4: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm warn deprecated text-encoding@0.7.0: no longer maintained
```

TODO

- For bedrock-express module review and address the deprecated warnings listed in the `deprecated-warnings` section:
  - Replace `uid-number@0.0.6` with a supported alternative or remove its dependency.
  - Refactor code to use the optional chaining (`?.`) operator instead of `lodash.get@4.4.2`.
  - Replace `lodash.template@4.5.0` with `eta` as suggested.
  - Investigate alternatives for `string-similarity@4.0.4` or contact npm support for guidance.
  - Remove or replace `text-encoding@0.7.0` as it is no longer maintained.

---
---

### `bedrock-views` module

Warnings

```bash
parthbhatt@localhost example1-basic % npm install bedrock-views
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: 'eslint-plugin-jsdoc@37.9.7',
npm warn EBADENGINE   required: { node: '^12 || ^14 || ^16 || ^17' },
npm warn EBADENGINE   current: { node: 'v23.4.0', npm: '10.9.2' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@es-joy/jsdoccomment@0.20.1',
npm warn EBADENGINE   required: { node: '^12 || ^14 || ^16 || ^17' },
npm warn EBADENGINE   current: { node: 'v23.4.0', npm: '10.9.2' }
npm warn EBADENGINE }
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
npm warn deprecated consolidate@0.15.1: Please upgrade to consolidate v1.0.0+ as it has been modernized with several long-awaited fixes implemented. Maintenance is supported by Forward Email at https://forwardemail.net ; follow/watch https://github.com/ladjs/consolidate for updates and release changelog
npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
```

TODO

- Review and address the warnings listed in the `bedrock-views` installation section:
  - Resolve the `EBADENGINE` warnings by ensuring the Node.js version matches the required versions for `eslint-plugin-jsdoc@37.9.7` and `@es-joy/jsdoccomment@0.20.1`.
  - Replace `inflight@1.0.6` with `lru-cache` or another supported alternative.
  - Update `@humanwhocodes/config-array@0.13.0` to `@eslint/config-array`.
  - Upgrade `rimraf@3.0.2` to version 4 or later.
  - Upgrade `glob@7.2.3` to version 9 or later.
  - Replace `@humanwhocodes/object-schema@2.0.3` with `@eslint/object-schema`.
  - Upgrade `consolidate@0.15.1` to version 1.0.0 or later.
  - Update `eslint@8.57.1` to a supported version as per the [ESLint version support policy](https://eslint.org/version-support).

---
---

### `bedrock-webpack` module

Warnings

```bash
parthbhatt@localhost example1-basic % npm install bedrock-webpack
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@es-joy/jsdoccomment@0.20.1',
npm warn EBADENGINE   required: { node: '^12 || ^14 || ^16 || ^17' },
npm warn EBADENGINE   current: { node: 'v23.4.0', npm: '10.9.2' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: 'eslint-plugin-jsdoc@37.9.7',
npm warn EBADENGINE   required: { node: '^12 || ^14 || ^16 || ^17' },
npm warn EBADENGINE   current: { node: 'v23.4.0', npm: '10.9.2' }
npm warn EBADENGINE }
npm warn deprecated move-concurrently@1.0.1: This package is no longer supported.
npm warn deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
npm warn deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
npm warn deprecated figgy-pudding@3.5.2: This module is no longer supported.
npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
npm warn deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm warn deprecated copy-concurrently@1.0.5: This package is no longer supported.
npm warn deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm warn deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
npm warn deprecated @babel/plugin-proposal-object-rest-spread@7.20.7: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-object-rest-spread instead.
npm warn deprecated q@1.5.1: You or someone you depend on is using Q, the JavaScript Promise library that gave JavaScript developers strong feelings about promises. They can almost certainly migrate to the native JavaScript promise now. Thank you literally everyone for joining me in this bet against the odds. Be excellent to each other.
npm warn deprecated
npm warn deprecated (For a CapTP with native promises, see @endo/eventual-send and @endo/captp)
npm warn deprecated fs-write-stream-atomic@1.0.10: This package is no longer supported.
npm warn deprecated fsevents@1.2.13: Upgrade to fsevents v2 to mitigate potential security issues
npm warn deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.

> @parcel/watcher@2.5.1 install
> node scripts/build-from-source.js


> fsevents@1.2.13 install
> node install.js

gyp info it worked if it ends with ok
gyp info using node-gyp@11.0.0
gyp info using node@23.4.0 | darwin | arm64
gyp info find Python using Python version 3.13.1 found at "/Library/Frameworks/Python.framework/Versions/3.13/bin/python3"

gyp info spawn /Library/Frameworks/Python.framework/Versions/3.13/bin/python3
gyp info spawn args [
gyp info spawn args '/Users/parthbhatt/.nvm/versions/node/v23.4.0/lib/node_modules/npm/node_modules/node-gyp/gyp/gyp_main.py',
gyp info spawn args 'binding.gyp',
gyp info spawn args '-f',
gyp info spawn args 'make',
gyp info spawn args '-I',
gyp info spawn args '/Users/parthbhatt/Documents/Work/Development/digital_bazaar_inc/bedrock-learning/example1-basic/node_modules/fsevents/build/config.gypi',
gyp info spawn args '-I',
gyp info spawn args '/Users/parthbhatt/.nvm/versions/node/v23.4.0/lib/node_modules/npm/node_modules/node-gyp/addon.gypi',
gyp info spawn args '-I',
gyp info spawn args '/Users/parthbhatt/Library/Caches/node-gyp/23.4.0/include/node/common.gypi',
gyp info spawn args '-Dlibrary=shared_library',
gyp info spawn args '-Dvisibility=default',
gyp info spawn args '-Dnode_root_dir=/Users/parthbhatt/Library/Caches/node-gyp/23.4.0',
gyp info spawn args '-Dnode_gyp_dir=/Users/parthbhatt/.nvm/versions/node/v23.4.0/lib/node_modules/npm/node_modules/node-gyp',
gyp info spawn args '-Dnode_lib_file=/Users/parthbhatt/Library/Caches/node-gyp/23.4.0/<(target_arch)/node.lib',
gyp info spawn args '-Dmodule_root_dir=/Users/parthbhatt/Documents/Work/Development/digital_bazaar_inc/bedrock-learning/example1-basic/node_modules/fsevents',
gyp info spawn args '-Dnode_engine=v8',
gyp info spawn args '--depth=.',
gyp info spawn args '--no-parallel',
gyp info spawn args '--generator-output',
gyp info spawn args 'build',
gyp info spawn args '-Goutput_dir=.'
gyp info spawn args ]
gyp info spawn make
gyp info spawn args [ 'BUILDTYPE=Release', '-C', 'build' ]
  SOLINK_MODULE(target) Release/.node
  CXX(target) Release/obj.target/fse/fsevents.o
In file included from ../fsevents.cc:6:
In file included from ../../nan/nan.h:62:
In file included from /Users/parthbhatt/Library/Caches/node-gyp/23.4.0/include/node/node.h:73:
/Users/parthbhatt/Library/Caches/node-gyp/23.4.0/include/node/v8.h:21:10: fatal error: 'memory' file not found
   21 | #include <memory>
      |          ^~~~~~~~
1 error generated.
make: *** [Release/obj.target/fse/fsevents.o] Error 1
gyp ERR! build error 
gyp ERR! stack Error: `make` failed with exit code: 2
gyp ERR! stack at ChildProcess.<anonymous> (/Users/parthbhatt/.nvm/versions/node/v23.4.0/lib/node_modules/npm/node_modules/node-gyp/lib/build.js:216:23)
gyp ERR! System Darwin 24.4.0
gyp ERR! command "/Users/parthbhatt/.nvm/versions/node/v23.4.0/bin/node" "/Users/parthbhatt/.nvm/versions/node/v23.4.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
gyp ERR! cwd /Users/parthbhatt/Documents/Work/Development/digital_bazaar_inc/bedrock-learning/example1-basic/node_modules/fsevents
gyp ERR! node -v v23.4.0
gyp ERR! node-gyp -v v11.0.0
gyp ERR! not ok 

> fsevents@2.3.3 install
> node-gyp rebuild

gyp info it worked if it ends with ok
gyp info using node-gyp@11.0.0
gyp info using node@23.4.0 | darwin | arm64
gyp info find Python using Python version 3.13.1 found at "/Library/Frameworks/Python.framework/Versions/3.13/bin/python3"

gyp info spawn /Library/Frameworks/Python.framework/Versions/3.13/bin/python3
gyp info spawn args [
gyp info spawn args '/Users/parthbhatt/.nvm/versions/node/v23.4.0/lib/node_modules/npm/node_modules/node-gyp/gyp/gyp_main.py',
gyp info spawn args 'binding.gyp',
gyp info spawn args '-f',
gyp info spawn args 'make',
gyp info spawn args '-I',
gyp info spawn args '/Users/parthbhatt/Documents/Work/Development/digital_bazaar_inc/bedrock-learning/example1-basic/node_modules/watchpack/node_modules/fsevents/build/config.gypi',
gyp info spawn args '-I',
gyp info spawn args '/Users/parthbhatt/.nvm/versions/node/v23.4.0/lib/node_modules/npm/node_modules/node-gyp/addon.gypi',
gyp info spawn args '-I',
gyp info spawn args '/Users/parthbhatt/Library/Caches/node-gyp/23.4.0/include/node/common.gypi',
gyp info spawn args '-Dlibrary=shared_library',
gyp info spawn args '-Dvisibility=default',
gyp info spawn args '-Dnode_root_dir=/Users/parthbhatt/Library/Caches/node-gyp/23.4.0',
gyp info spawn args '-Dnode_gyp_dir=/Users/parthbhatt/.nvm/versions/node/v23.4.0/lib/node_modules/npm/node_modules/node-gyp',
gyp info spawn args '-Dnode_lib_file=/Users/parthbhatt/Library/Caches/node-gyp/23.4.0/<(target_arch)/node.lib',
gyp info spawn args '-Dmodule_root_dir=/Users/parthbhatt/Documents/Work/Development/digital_bazaar_inc/bedrock-learning/example1-basic/node_modules/watchpack/node_modules/fsevents',
gyp info spawn args '-Dnode_engine=v8',
gyp info spawn args '--depth=.',
gyp info spawn args '--no-parallel',
gyp info spawn args '--generator-output',
gyp info spawn args 'build',
gyp info spawn args '-Goutput_dir=.'
gyp info spawn args ]
gyp: binding.gyp not found (cwd: /Users/parthbhatt/Documents/Work/Development/digital_bazaar_inc/bedrock-learning/example1-basic/node_modules/watchpack/node_modules/fsevents) while trying to load binding.gyp
gyp ERR! configure error 
gyp ERR! stack Error: `gyp` failed with exit code: 1
gyp ERR! stack at ChildProcess.<anonymous> (/Users/parthbhatt/.nvm/versions/node/v23.4.0/lib/node_modules/npm/node_modules/node-gyp/lib/configure.js:317:18)
gyp ERR! stack at ChildProcess.emit (node:events:513:28)
gyp ERR! stack at ChildProcess._handle.onexit (node:internal/child_process:294:12)
gyp ERR! System Darwin 24.4.0
gyp ERR! command "/Users/parthbhatt/.nvm/versions/node/v23.4.0/bin/node" "/Users/parthbhatt/.nvm/versions/node/v23.4.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
gyp ERR! cwd /Users/parthbhatt/Documents/Work/Development/digital_bazaar_inc/bedrock-learning/example1-basic/node_modules/watchpack/node_modules/fsevents
gyp ERR! node -v v23.4.0
gyp ERR! node-gyp -v v11.0.0
gyp ERR! not ok 

> core-js@3.42.0 postinstall
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting core-js:
> https://opencollective.com/core-js 
> https://patreon.com/zloirock 
> https://boosty.to/zloirock 
> bitcoin: bc1qlea7544qtsmj2rayg0lthvza9fau63ux0fstcz 

I highly recommend reading this: https://github.com/zloirock/core-js/blob/master/docs/2023-02-14-so-whats-next.md 


added 874 packages, and audited 1226 packages in 23s

156 packages are looking for funding
  run `npm fund` for details

70 vulnerabilities (4 low, 46 moderate, 20 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```

TODO

- Review and address the warnings listed in the `bedrock-webpack` installation section:
  - Resolve the `EBADENGINE` warnings by ensuring the Node.js version matches the required versions for `@es-joy/jsdoccomment@0.20.1` and `eslint-plugin-jsdoc@37.9.7`.
  - Replace `move-concurrently@1.0.1` with a supported alternative.
  - Remove or replace deprecated packages:
    - `stable@0.1.8` (modern JS already guarantees stable sort).
    - `source-map-url@0.4.1`.
    - `figgy-pudding@3.5.2`.
    - `rimraf@2.7.1` (upgrade to version 4 or later).
    - `urix@0.1.0`.
    - `copy-concurrently@1.0.5`.
    - `resolve-url@0.2.1`.
    - `source-map-resolve@0.5.3`.
    - `@babel/plugin-proposal-object-rest-spread@7.20.7` (use `@babel/plugin-transform-object-rest-spread` instead).
    - `q@1.5.1` (migrate to native JavaScript promises).
    - `fs-write-stream-atomic@1.0.10`.
    - `fsevents@1.2.13` (upgrade to version 2 or later).
    - `svgo@1.3.2` (upgrade to version 2.x.x).
  - Address vulnerabilities reported by `npm audit`:
    - Run `npm audit fix` for non-breaking changes.
    - Run `npm audit fix --force` for breaking changes, if applicable.
  - Investigate and resolve `node-gyp` build errors related to `fsevents`.
