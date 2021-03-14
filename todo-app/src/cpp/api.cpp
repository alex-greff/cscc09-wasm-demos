#include "api.hpp"
#include <emscripten/emscripten.h>
#include <emscripten/bind.h>

// Build bindings to our internal C++ objects so we can interact with them
// more naturally in our JavaScript
using namespace emscripten;
EMSCRIPTEN_BINDINGS(my_module)
{
  // Bind the TodoAppAPI class so we can interact with it in JavaScript
  class_<TodoAppAPI>("TodoAppAPI")
  .constructor()
  .function("onItemUpdate", &TodoAppAPI::onItemUpdate)
  .function("addItem", &TodoAppAPI::addItem)
  .function("deleteItem", &TodoAppAPI::deleteItem);

  // Register map<int, string> so JavaScript can access those maps whenever we
  // return one
  register_map<int, std::string>("map<int, string>");
  // This builds the bindings for vector<int>'s (which we need when we call
  // map.keys() for some binded map)
  register_vector<int>("vector<int>");
}