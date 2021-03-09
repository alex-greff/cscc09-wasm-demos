(() => {
  window.onload = async () => {
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
      const sum = Module._add(a, b);

      const sumResult = sumExampleForm.querySelector("#sum-result");
      sumResult.innerHTML = sum;
    });
  };
})();