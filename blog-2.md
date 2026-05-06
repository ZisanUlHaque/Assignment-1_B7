# How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?

Object-Oriented Programming (OOP) provides a structured methodology to handle complexity through four core pillars.

### 1. Inheritance: Reusing Code
Inheritance allows a class to derive features from another class. This keeps our code **DRY**.

```
class Person {
  constructor(public name: string, public age: number, public address: string) {}
  getSleep(numOFhours: number) {
    console.log(`${this.name} ${numOFhours} ghonta ghumai`);
  }
}

class Student extends Person {
  constructor(name: string, age: number, address: string, public rollNo: number) {
    super(name, age, address);
  }
}
const student1 = new Student("Mr. Zisan", 18, "BD", 1981);
```

### 2. Polymorphism: Flexibility in Action
Polymorphism allows different classes to be treated as instances of the same parent class, even if they implement logic differently.

```
class Person {
  getSleep() { console.log("I sleep for 8 hours"); }
}

class NextLevelDeveloper extends Person {
  getSleep() { console.log("I sleep for 6 hours"); }
}

const getSleepingHours = (param: Person) => { param.getSleep(); };
getSleepingHours(new NextLevelDeveloper());
```

### 3. Abstraction: Hiding Complexity
Abstraction focuses on *what* an object does rather than *how*. We use `abstract` classes to create a blueprint.

```
abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
}

class MezbaPlayer extends MediaPlayer {
  play() { console.log("Playing music..."); }
  pause() { console.log("Music is paused!"); }
}
```

### 4. Encapsulation: Protecting Your Data
By using access modifiers like `private` and `readonly`, we prevent external code from accidentally corrupting internal logic.

```
class BankAccount {
  public readonly userId: number;
  private _userBalance: number;

  constructor(userId: number, userBalance: number) {
    this.userId = userId;
    this._userBalance = userBalance;
  }

  public deposit(amount: number) { this._userBalance += amount; }
}
```
###Conclusion
By using these four pillars, you can build TypeScript applications that are easier to scale, test, and maintain. Inheritance reuses code, Polymorphism provides flexibility, Abstraction simplifies the interface, and Encapsulation keeps your data safe.