const WASM_MOD_URL = chrome.runtime.getURL("js/wasm/wasm_mod.js");

const loadWasmModule = async () => {
  const mod = await import(WASM_MOD_URL);

  const isOK = await mod.default().catch((e) => {
    console.warn("failed to init wasm module in content script: ", e);
    return null;
  });

  return isOK ? mod : null;
};

(async () => {
  const mod = await loadWasmModule();
  if (mod) {
    const { hello_content } = mod;
    hello_content();
  }
})();
