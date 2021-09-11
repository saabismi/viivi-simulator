// include the Node.js 'path' module at the top of your file
const path = require('path')
const { app, BrowserWindow } = require('electron')

// modify your existing createWindow() function
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})
  
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })
  