export const CORS_SERVER = "https://cors-anywhere-jaagrav.herokuapp.com/";
export const COMPILER_SERVER = "https://try.w3schools.com/try_compiler.php";

export const DEFAULT_EDITOR_CONFIG = {
  style: { flexGrow: 1, width: "100%" },
  theme: "one_dark",
  name: "editor",
  fontSize: 18,
  showGutter: true,
  highlightActiveLine: true,
  setOptions: {
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableMultiselect: true,
    showLineNumbers: true,
    showPrintMargin: false,
    tabSize: 2,
  },
};

export const CODE_EXAMPLES = {
  Python: `print("Hello Editor Now!")
`,
  "C#": `using System;
namespace HelloWorld {
  class Program {
    static void Main(string[] args) {
      Console.WriteLine("Hello Editor Now!");    
    }
  }
}
`,
  "C++": `#include <iostream>
using namespace std;

int main() {
  cout << "Hello Editor Now!";
  return 0;
}
`,
  Clojure: `(println "Hello Editor Now!")
`,
  Fortran: `program test
  implicit none
  write(*,*) 'Hello Editor Now!'
end program test
`,
  Golang: `package main
import "fmt"
func main() {
    fmt.Println("Hello Editor Now!")
}
`,
  Java: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello Editor Now!");
  }
}
`,
  Kotlin: `fun main(args: Array<String>) {
  println("Hello Editor Now!");
}
`,
  NodeJS: `console.log("Hello Editor Now!");
`,
  PHP: `<?php
echo "Hello Editor Now!";
?>`,
  Perl: `print("Hello Editor Now!")
`,
  R: `"Hello Editor Now!"
`,
  Ruby: `puts "Hello Editor Now!"
`,
  Scala: `object Main extends App {
	System.out.println("Hello Editor Now!");
}
`,
  Swift: `print("Hello Editor Now!")
`,
  Typescript: `const message: String = "Hello Editor Now!";
console.log(message);
`,
};
