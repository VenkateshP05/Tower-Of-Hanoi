# 🗼 Tower of Hanoi Game
## 🎯 Objective

The goal of the Tower of Hanoi game is to move all disks from the **Rod A** to the **Rod B or C**, following a strict set of rules.

---

## 🧱 Game Rules

* Only **one disk** can be moved at a time.
* Only the **top disk** of any rod can be moved.
* A **larger disk cannot be placed on top of a smaller disk**.

---

## ▶️ How to Play

1. Select the **top disk** from any rod.
2. Move it to another rod, ensuring the move follows the rules.
3. Continue until all disks are moved to the **Destination Rod**.

---

## 🔢 Minimum Moves

The minimum number of moves required to solve the puzzle optimally is:

```
2^n - 1
```

Where `n` is the number of disks.

| Disks | Minimum Moves |
| ----- | ------------- |
| 3     | 7             |
| 4     | 15            |
| 5     | 31            |
| 6     | 63            |
| 7     | 127           |
| 8     | 255           |


## 🛠️ Tech Stack

* **React**
* **JavaScript (ES6+)**
* **Tailwind CSS**

---
