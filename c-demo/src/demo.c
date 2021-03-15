#include <emscripten/emscripten.h>
#include <stdio.h>

// This wraps our add function in extern "C" if we are using a C++ compiler. 
// This stops the C++ compiler from name mangling our function's name
#ifdef __cplusplus
extern "C" {
  int add(int, int);
}
#endif

// Signal to emscripten to not remove this function during compilation as
// an optimization
EMSCRIPTEN_KEEPALIVE 
int add(int a, int b) {
  return a + b;
}