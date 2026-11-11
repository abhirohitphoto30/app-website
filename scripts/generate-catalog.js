const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'apps');
const out = path.join(__dirname, '..', 'apps.json');
const descriptions = {
  'abhishek.apk': { name: 'ABHISHEK', description: 'Android application · Ready to explore', category: 'ANDROID APP', icon: '✦' },
  'quizbot.apk': { name: 'QuizBot', description: 'Quiz experience · Learn, practise and play', category: 'EDUCATION', icon: '🧠' }
};
const files = fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.apk'));
const apps = files.map(file => {
  const stat = fs.statSync(path.join(dir, file));
  const preset = descriptions[file.toLowerCase()] || {};
  const base = path.parse(file).name.replace(/[_-]+/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return {
    name: preset.name || base,
    description: preset.description || 'A new Android experience is waiting. Download and explore.',
    category: preset.category || 'ANDROID APP',
    icon: preset.icon || '✦',
    version: 'APK',
    size: stat.size,
    file: './apps/' + encodeURIComponent(file)
  };
});
fs.writeFileSync(out, JSON.stringify(apps, null, 2) + '\n');
console.log(`APPVERSE X: generated catalogue for ${apps.length} APK(s).`);
