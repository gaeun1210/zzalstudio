// 실행: node tests/run-tests.js  (저장소 맨 위 폴더에서)
const {makeFileName} = require('../filename.js');
const TESTS = require('./fn-tests.js');
let pass = 0;
for (const t of TESTS) {
  let got; try { got = makeFileName(t.input); } catch (e) { got = 'ERROR: ' + e.message; }
  const ok = got === t.expect; if (ok) pass++;
  console.log(`${ok ? 'PASS' : 'FAIL'} ${t.id} ${t.name}` + (ok ? '' : `\n     기대: ${t.expect}\n     실제: ${got}`));
}
console.log(`\n통과 ${pass}/${TESTS.length}`);
process.exitCode = pass === TESTS.length ? 0 : 1;
