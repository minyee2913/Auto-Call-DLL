import { readdir, readdirSync } from 'fs';
import { NativeModule } from './bdsx';
let localfile = './'
let NOT = [
    "ChakraCore.dll",
    "Chakra.dll",
    "dbghelp.dll"
]


let dir = readdirSync(localfile);
dir.forEach((v)=>{
    if (NOT.includes(v)) {
        return;
    }
    if (v.includes(`.dll`)) console.log(`[CALL DLL] ${v}`);
    if (v.includes(`.dll`)) NativeModule.load(`${v}`);
});
