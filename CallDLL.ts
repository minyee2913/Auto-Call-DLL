import { readdir } from 'fs';
import { NativeModule } from './bdsx';
let localfile = './mods'

readdir(localfile, function(error, filelist){
    filelist.forEach((v)=>{
        console.log(`[CALL DLL] ${v}`);
    });
    filelist.forEach((v)=>{
        NativeModule.load(`${localfile}/${v}`);
    })
});