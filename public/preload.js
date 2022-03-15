const { BrowserWindow} = require("electron");

//COMMON PROCESS
process.once("loaded", () => {
  BrowserWindow.exposeInMainWorld("versions", process.versions);
});

//DATABASE PROCESS
const usuario                         = require("../Database/systemBase/models/usuario");
const systemBase                      = require("../Database/systemBase/systemBaseMgr");

//USUARIO
BrowserWindow.exposeInMainWorld('usuario',{
  async usuario(){
    return usuario;
  },
})




