(function(){
    "use strict";

    // A promise that resolves when the API wasm module instantiates
    const apiLoaded = new Promise((accept) => {
        Module.onRuntimeInitialized = () => accept();
    });
        
    window.addEventListener('load', async () => {
        // Ensure the API wasm module has loaded
        await apiLoaded;

        // You can check out what the module looks with the following
        console.log("Module", Module);

        // Instantiate our api module
        const api = new Module.TodoAppAPI();

        // Clean-up the api class instance before the page closes
        window.addEventListener("beforeunload", () => {
            // You need to handle the lifecyle of the class manually since
            // WebAssembly does not have garbage collection
            api.delete();
        })
        
        
        api.onItemUpdate(function(items) {
            // Note `items` is C++ map of <int, string> that has been 
            // binded to have JavaScript wrapper functions
            // See this link for more documentation on vector/map bindings:
            // https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html#built-in-type-conversions

            document.querySelector('#items').innerHTML = '';

            // A binded vector<int> of the ids of all the items
            const ids = items.keys();

            // Iterate through all the ids
            for (let i = 0; i < ids.size(); i++) {
                // Get the id key
                const id = ids.get(i);
                // Get the content string, which is the entry of the `items` map
                const content = items.get(i);

                let element = document.createElement('div');
                element.className = "item";
                element.innerHTML = `
                    <div class="item_content">${content}</div>
                    <div class="delete-icon icon"></div>
                `;
                element.querySelector('.delete-icon').addEventListener('click', function(e){
                    api.deleteItem(id);
                }); 
                document.querySelector('#items').prepend(element);
            }
        });

        document.querySelector('#add_item').addEventListener('submit', function(e){
            e.preventDefault();
            let content = document.querySelector('#content_form').value;
            document.querySelector('#add_item').reset();
            api.addItem(content);
        });
    });
    
}());



