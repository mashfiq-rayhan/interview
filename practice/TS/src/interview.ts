// ✅ Basics

// Types
// let isDone: boolean = true;
// let age: number = 31;
// let username: string = "Rev";
// let notSure: any = 4;
// let u: undefined = undefined;
// let n: null = null;

// Arrays & Tuples
// let list: number[] = [1, 2, 3];
// let list1: Array<string> = ["a", "b", "c"];

// let tuple: [string, number] = ["Rev", 31];

// Enums
// enum Direction {
//   Up = 1,
//   Down,
//   Left,
//   Right,
// }

// let move1: Direction = Direction.Up;
// let move2: Direction = Direction.Down;
// let move3: Direction = Direction.Left;
// let move4: Direction = Direction.Right;

// console.log(move1);
// console.log(move2);
// console.log(move3);
// console.log(move4);

// Type Aliases & Interfaces
// type ID = string | number;
// interface User {
//   id: ID;
//   name: string;
//   age?: number;
// }

// let user: User = {
//   id: 1,
//   name: "Rev",
// };

// Functions
// function add(x: number, y: number): number {
//   return x + y;
// }

// const multiply = (x: number, y: number): number => x + y;

// function log(msg: string) {
//   console.log(msg);
// }

// function identity<T>(arg: T): T {
//   return arg;
// }

// 🔼 Advance Type
// Union & Intersection
// let value: string | number;

// interface A {
//   a: string;
// }

// interface B {
//   b: number;
// }

// type C = A & B;

// Type Narrowing
// function printId(id: string | number) {
//   if (typeof id === "string") {
//     console.log(id.toUpperCase());
//   } else {
//     console.log(id);
//   }
// }

// Literal Types
// let direction: "up" | "down";
// direction = "up";

// Type Assertions
// let somevalue: unknown = "hello";
// let strLength: number = (somevalue as string).length;

// Nullable & non-Null Assertion

// let x: string | null = null;
// let y: string = x!;

//  Classes & OOP
// class Person {
//   private id: number;
//   public name: string;
//   protected age: number;

//   constructor(id: number, name: string, age: number) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//   }

//   greet(): string {
//     return `Hello, My Name is ${this.name}`;
//   }
// }

// class Student extends Person {
//   grade: number;
//   constructor(id: number, name: string, age: number, grade: number) {
//     super(id, name, age);
//     this.grade = grade;
//   }
// }

// abstract class Animal {
//   abstract makeSound(): void;
//   move(): void {
//     console.log("Moving...");
//   }
// }

// interface Flyable {
//   fly(): void;
// }

// 🔹 Generics
// function identity<T>(arg: T): T {
//   return arg;
// }

// function loggingidentity<T>(arg: T[]): T[] {
//   console.log(arg.length);
//   return arg;
// }

// interface GenericIdentityFn<T> {
//   (arg: T): T;
// }

// 🔹 Utility Types
// ------------------ Interfaces Examples ------------------

// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// // Partial<T>: all optional
// let todoPartial: Partial<Todo> = {
//   title: "Learn TS",
// };

// // Readonly<T>: all readonly
// let readonlyTodo: Readonly<Todo> = {
//   title: "Learn TS",
//   description: "Study Utility Types",
//   completed: false,
// };
// // readonlyTodo.title = "New"

// // Pick<T, K>: select specific keys
// let picked: Pick<Todo, "title" | "completed"> = {
//   title: "Task",
//   completed: true,
// };

// // Omit<T, K>: remove specific keys
// let omitted: Omit<Todo, "description"> = {
//   title: "Task",
//   completed: false,
// };

// // Record<K, T>: object with keys K and values T
// type Roles = "admin" | "editor" | "viewer";
// let perms: Record<Roles, boolean> = {
//   admin: true,
//   editor: false,
//   viewer: true,
// };

// // Exclude<T, U>: remove matching union types
// type Status = "success" | "error" | "loading";
// type NotLoading = Exclude<Status, "loading">;
// let status1: NotLoading = "success";

// // Extract<T, U>: keep only matching union types
// type OnlyLoading = Extract<Status, "loading" | "error">;
// let status3: OnlyLoading = "loading";

// ------------------ Types Examples ------------------
// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// // Partial<T>
// let userPartial: Partial<User> = {
//   id: 1,
// };

// // Readonly<T>
// let readonlyUser: Readonly<User> = {
//   id: 1,
//   name: "Rev",
//   email: "rev@example.com",
// };

// // Pick<T, K>
// let userPicked: Pick<User, "id" | "name"> = {
//   id: 99,
//   name: "Boss",
// };

// // Omit<T, K>
// let userOmitted: Omit<User, "email"> = {
//   id: 7,
//   name: "ovi",
// };

// // Record<K, T>
// type Languages = "en" | "de" | "fr";
// let translation: Record<Languages, string> = {
//   en: "Hello",
//   de: "Hallo",
//   fr: "Bonjour",
// };

// // Exclude<T, U>
// type Fruit = "apple" | "banana" | "orange";
// type Citrus = Exclude<Fruit, "banana">;
// let fruit: Citrus = "apple";

// // Extract<T, U>
// type Animal = "dog" | "cat" | "fish";
// type Pets = Extract<Animal, "dog" | "cat">;
// let pet: Pets = "dog";

// 🔹 Advanced Features
// keyof & typeof

// interface Person {
//   name: string;
//   age: number;
// }

// type PersonKeys = keyof Person;

// const person = { name: "Rev", age: 31 };

// type PersonType = typeof person;

// Mapped Types
// type OptionsFlags<T> = {
//   [property in keyof T]: boolean;
// };

// interface Features {
//   darkMode: () => void;
//   newuserProfile: () => void;
// }

// type FeatureOptions = OptionsFlags<Features>;

// Conditional Types
// type IsString<T> = T extends string ? true : false;
// type A = IsString<string>;
// type B = IsString<number>;

// Infer
// type ReturnTypee<T> = T extends (...args: any[]) => infer R ? R : any;

// function foo(x: number): string {
//   return x.toString();
// }

// type FooReturn = ReturnTypee<typeof foo>