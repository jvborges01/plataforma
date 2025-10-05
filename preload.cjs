const { contextBridge, shell } = require('electron');

console.log('--- PRELOAD SCRIPT INICIADO ---');
console.log('contextBridge é:', typeof contextBridge);
console.log('shell é:', typeof shell);

if (shell && shell.openExternal) {
  console.log('✅ shell.openExternal disponível');

  contextBridge.exposeInMainWorld('electronAPI', {
    abrirLinkExterno: (url) => {
      console.log('Abrindo link externo:', url);
      shell.openExternal(url);
    },
  });
} else {
  console.error('❌ shell.openExternal não disponível.');
  contextBridge.exposeInMainWorld('electronAPI', {
    abrirLinkExterno: () => console.error('shell.openExternal não está disponível.'),
  });
}
