const { dialog, globalShortcut, BrowserWindow } = require('electron');

const disableRefresh = () => {
    globalShortcut.register('CommandOrControl+R', () => {
      //
    })
}

const enableRefresh = () => {
    globalShortcut.unregister('CommandOrControl+R')
}

exports.onWindow = function (win) {
  win.on('show', disableRefresh)
  win.on('hide', enableRefresh)
  win.on('blur', enableRefresh)
  win.on('focus', disableRefresh)
  win.on('closed', enableRefresh)
}

exports.onApp = (app) => {
  //
}