(() => {
  window.onload = async () => {
    console.log("Loading WASM Module....");

    // Instantiate the WebAssembly module
    const wasmModule = await WebAssembly.instantiateStreaming(
      fetch("./build/optimized.wasm"),
      {
        env: {
          abort(_msg, _file, line, column) {
            console.error("abort called at index.ts:" + line + ":" + column);
          }
        },
      }
    );

    console.log("WASM Module Loaded!");
    console.log("Module", wasmModule); // TODO: remove

    // --- Sum Example ---

    const sumExampleForm = document.querySelector("#sum-example");
    sumExampleForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const sumA = sumExampleForm.querySelector("#sum-a");
      const sumB = sumExampleForm.querySelector("#sum-b");

      const a = parseInt(sumA.value);
      const b = parseInt(sumB.value);

      // Call the WASM add function 
      const sum = wasmModule.instance.exports.add(a, b);

      const sumResult = sumExampleForm.querySelector("#sum-result");
      sumResult.innerHTML = sum;
    });
  };
})();