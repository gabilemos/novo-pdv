const { contextBridge } = require("electron");
const Database = require("../Database/databaseEngine");
process.once("loaded", () => {
  contextBridge.exposeInMainWorld("versions", process.versions);
});

//process.exposeInMainWorld('systemBase',Database);
