(() => {
  window.onload = async () => {
    console.log("Loading WASM Module....");

    // Instantiate the WebAssembly module
    // window.loader is the AssemblyScript loader which was loaded in index.html
    // This loader is similar to WebAssembly.instantiateStreaming except it
    // adds additional functions onto wasmModule.instance.exports for 
    // managing/interacting with the WASM module's memory from JavaScript
    const wasmModule = await window.loader.instantiate(
      fetch("./build/optimized.wasm"),
    );
    // Here is how you would instantiate the module normally, without the
    // AssemblyScript helper functions being inject 
    // const wasmModule = await WebAssembly.instantiateStreaming(
    //   fetch("./build/optimized.wasm"),
    // );

    console.log("WASM Module Loaded!");

    // You can check out what the module looks with the following
    console.log("Module", wasmModule);

    // --- Sum Example ---

    // Handle submission of the sum example form, running the add function
    // in our WASM module
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