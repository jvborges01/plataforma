import { app, BrowserWindow } from 'electron';
import { join } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      preload: join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      sandbox: false,
    },
  });

  // 🚀 Usa o caminho base do app (funciona no build e no modo dev)
  const indexPath = join(app.getAppPath(), 'index.html');
  win.loadFile(indexPath);
}

app.whenReady().then(createWindow);
