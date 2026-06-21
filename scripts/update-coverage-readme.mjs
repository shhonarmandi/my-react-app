import {readFileSync, writeFileSync} from 'fs';
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const summaryPath = join(root, 'coverage', 'coverage-summary.json');
const readmePath = join(root, 'README.md');

const summary = JSON.parse(readFileSync(summaryPath, 'utf8'));
const total = summary.total;

function badge(pct) {
  const value = pct.toFixed(1);
  const color = pct === 100 ? 'brightgreen' : pct >= 80 ? 'yellow' : 'red';
  return `![${value}%](https://img.shields.io/badge/${encodeURIComponent(value + '%')}-${color})`;
}

const table = `## Test Coverage

<!-- COVERAGE-START -->
| Metric | Coverage |
|--------|----------|
| Statements | ${badge(total.statements.pct)} \`${total.statements.covered}/${total.statements.total}\` |
| Branches | ${badge(total.branches.pct)} \`${total.branches.covered}/${total.branches.total}\` |
| Functions | ${badge(total.functions.pct)} \`${total.functions.covered}/${total.functions.total}\` |
| Lines | ${badge(total.lines.pct)} \`${total.lines.covered}/${total.lines.total}\` |
<!-- COVERAGE-END -->`;

let readme = readFileSync(readmePath, 'utf8');

const start = readme.indexOf('<!-- COVERAGE-START -->');
const end = readme.indexOf('<!-- COVERAGE-END -->');

if (start !== -1 && end !== -1) {
  const before = readme.slice(0, readme.lastIndexOf('## Test Coverage', start));
  const after = readme.slice(end + '<!-- COVERAGE-END -->'.length);
  readme = before + table + after;
} else {
  readme = readme.trimEnd() + '\n\n' + table + '\n';
}

writeFileSync(readmePath, readme);
console.log('README.md updated with coverage table.');
console.log(
  `Statements: ${total.statements.pct}% | Branches: ${total.branches.pct}% | Functions: ${total.functions.pct}% | Lines: ${total.lines.pct}%`
);
