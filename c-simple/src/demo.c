#include <emscripten/emscripten.h>
#include <stdio.h>

// This conditionally wrap in an extern "C" if we are compiling with the C++
// emscripten compiler. This stops our functions from the C++ name mangling
#ifdef __cplusplus
extern "C" {
#endif

// Signal to emscripten to not remove this function during compilation as
// an optimization
EMSCRIPTEN_KEEPALIVE 
int add(int a, int b) {
  return a + b;
}

#ifdef __cplusplus
}
#endif