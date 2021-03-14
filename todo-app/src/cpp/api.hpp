#ifndef TODO_APP_API_H
#define TODO_APP_API_H

#include <emscripten/emscripten.h>
#include <emscripten/bind.h>
#include <stdio.h>
#include <stdexcept>
#include <string>

// This class is our API module and is responsible for tracking the todo items
// and calling all registered listeners whenever data has changed
class TodoAppAPI {
private:
  // The list of JavaScript callback functions that are currently registered
  // I used this article for reference:
  // https://adamrehn.com/articles/creating-javascript-friendly-emscripten-interfaces-with-embind/
  // Its not the best article in the world but it gets accross the concept
  std::vector<emscripten::val> itemListeners;

  // The next id we will use
  int next;

  // The items our todo list currently has
  // The key is the the id of the todo item and the entry is the content of
  // the todo item
  std::map<int, std::string> items;

  void notifyItemListeners() {
    for (int i = 0; i < itemListeners.size(); i++) {
      itemListeners[i](items);
    }
  }

public:
  TodoAppAPI() : next(0) {}

  void onItemUpdate(emscripten::val listener) {
    itemListeners.push_back(listener);
    listener(items);
  }

  void addItem(std::string content) {
    items.insert({ next++, content });
    notifyItemListeners();
  }

  void deleteItem(int id) {
    items.erase(id);
    notifyItemListeners();
  }
};


#endif