import initWasmModule, { hello_log } from './wasm/wasm_mod.js';

(async () => {
  await initWasmModule();
  hello_log();
})
