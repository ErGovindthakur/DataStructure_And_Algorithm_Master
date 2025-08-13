/*
4. Polymorphism in JavaScript
📌 Definition: Different classes define the same method name, but each behaves differently.
Real-life analogy:
A phone's "unlock" action can be done by face, pattern, password, or voice — but you still call unlock().
*/

// Base class
class PhoneLock {
  unLock() {
    return "Phone can be unlocked by multiple methods...";
  }
}

// Child classes overriding the method
class FaceLock extends PhoneLock {
  unLock() {
    return "Phone unlocked by face...";
  }
}

class PatternLock extends PhoneLock {
  unLock() {
    return "Phone unlocked by pattern...";
  }
}

class PasswordLock extends PhoneLock {
  unLock() {
    return "Phone unlocked by password...";
  }
}

class VoiceLock extends PhoneLock {
  unLock() {
    return "Phone unlocked by voice...";
  }
}

// Array of different lock method objects
let lockMethods = [
  new FaceLock(),
  new PatternLock(),
  new PasswordLock(),
  new VoiceLock()
];

// Demonstrating polymorphism
for (let lock of lockMethods) {
  console.log(lock.unLock()); // Same method name, different behavior
}
