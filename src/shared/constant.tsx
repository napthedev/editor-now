import { Navigate, Route } from "react-location";
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

export const routes: Route[] = [
  {
    path: "/",
    element: <Navigate to="/python" />,
  },
  {
    path: "/python",
    element: () =>
      import("../pages/Python").then((module) => <module.default />),
    meta: {
      lang: 116,
      name: "Python",
    },
  },
  {
    path: "/csharp",
    element: () =>
      import("../pages/CSharp").then((module) => <module.default />),
    meta: {
      lang: 27,
      name: "C#",
    },
  },
  {
    path: "/cpp",
    element: () => import("../pages/CPP").then((module) => <module.default />),
    meta: {
      lang: 44,
      name: "C++",
    },
  },
  {
    path: "/clojure",
    element: () =>
      import("../pages/Clojure").then((module) => <module.default />),
    meta: {
      lang: 111,
      name: "Clojure",
    },
  },
  {
    path: "/fortran",
    element: () =>
      import("../pages/Fortran").then((module) => <module.default />),
    meta: {
      lang: 5,
      name: "Fortran",
    },
  },
  {
    path: "/go",
    element: () => import("../pages/Go").then((module) => <module.default />),
    meta: {
      lang: 114,
      name: "Golang",
    },
  },
  {
    path: "/java",
    element: () => import("../pages/Java").then((module) => <module.default />),
    meta: {
      lang: 10,
      name: "Java",
    },
  },
  {
    path: "/kotlin",
    element: () =>
      import("../pages/Kotlin").then((module) => <module.default />),
    meta: {
      lang: 47,
      name: "Kotlin",
    },
  },
  {
    path: "/nodejs",
    element: () =>
      import("../pages/NodeJS").then((module) => <module.default />),
    meta: {
      lang: 56,
      name: "NodeJS",
    },
  },
  {
    path: "/php",
    element: () => import("../pages/PHP").then((module) => <module.default />),
    meta: {
      lang: 29,
      name: "PHP",
    },
  },
  {
    path: "/perl",
    element: () => import("../pages/Perl").then((module) => <module.default />),
    meta: {
      lang: 54,
      name: "Perl",
    },
  },
  {
    path: "/r",
    element: () => import("../pages/R").then((module) => <module.default />),
    meta: {
      lang: 117,
      name: "R",
    },
  },
  {
    path: "/ruby",
    element: () => import("../pages/Ruby").then((module) => <module.default />),
    meta: {
      lang: 17,
      name: "Ruby",
    },
  },
  {
    path: "/scala",
    element: () =>
      import("../pages/Scala").then((module) => <module.default />),
    meta: {
      lang: 39,
      name: "Scala",
    },
  },
  {
    path: "/swift",
    element: () =>
      import("../pages/Swift").then((module) => <module.default />),
    meta: {
      lang: 85,
      name: "Swift",
    },
  },
  {
    path: "/typescript",
    element: () =>
      import("../pages/Typescript").then((module) => <module.default />),
    meta: {
      lang: 57,
      name: "Typescript",
    },
  },
];
