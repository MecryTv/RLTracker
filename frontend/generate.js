import fs from 'fs';
import path from 'path';

const componentName = process.argv[2];

if (!componentName) {
    console.error('Bitte gib einen Namen für die Komponente an: npm run gen Name');
    process.exit(1);
}

const componentPath = path.join('src', 'components', `${componentName}.tsx`);
const stylePath = path.join('src', 'styles', `${componentName}.scss`);

const tsxTemplate = `import '../styles/${componentName}.scss';

export default function ${componentName}() {
  return (
    <div className="${componentName.toLowerCase()}">
      <h1>${componentName} Komponente</h1>
    </div>
  );
}
`;

const scssTemplate = `@use '../styles/variables' as *;`;

try {
    if (!fs.existsSync('src/components')) fs.mkdirSync('src/components', { recursive: true });
    if (!fs.existsSync('src/styles')) fs.mkdirSync('src/styles', { recursive: true });

    fs.writeFileSync(componentPath, tsxTemplate);
    fs.writeFileSync(stylePath, scssTemplate);

    console.log(`✅ Komponente erstellt: ${componentPath}`);
    console.log(`✅ Style erstellt: ${stylePath}`);
} catch (err) {
    console.error('Fehler beim Erstellen:', err);
}