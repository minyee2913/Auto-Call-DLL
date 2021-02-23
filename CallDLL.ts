import { readdir } from 'fs';
import { NativeModule } from './bdsx';
let localfile = './'
let NOT = [
    "ChakraCore.dll",
    "Chakra.dll",
    "bdghelp.dll"
]


readdir(localfile, function(error, filelist){
    filelist.forEach((v)=>{
        if (NOT.includes(v)) {
            return;
        }
        if (v.includes(`.dll`)) console.log(`[CALL DLL] ${v}`);
    });
    filelist.forEach((v)=>{
        if (NOT.includes(v)) {
            return;
        }
        if (v.includes(`.dll`)) NativeModule.load(`${localfile}/${v}`);
    })
});
