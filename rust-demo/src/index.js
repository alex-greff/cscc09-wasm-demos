// Note: this script is loaded as a module in index.html.
// This allows us to import modules using the import syntax which is what
// wasm-bindgen outputs.
import init from './pkg/rust_wasm_demo.js';

// Note: wasm-bindgen gives a convenient way of using your functions by simply
// importing them like so. Just make sure that the wasm module is initialized
// before using them
// For example you can import add as below and then use it as a regular function
// import { add } from './pkg/rust_wasm_demo.js';

async function run() {
  // We first load need to load the wasm module
  const Module = await init();

  // You can check out what the module looks with the following
  console.log("Module", Module);

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

    // Call the WASM add function (all functions we make are prefixed with
    // and underscore)
    const sum = Module.add(a, b);

    const sumResult = sumExampleForm.querySelector("#sum-result");
    sumResult.innerHTML = sum;
  });
}

window.onload = () => {
  run();
};