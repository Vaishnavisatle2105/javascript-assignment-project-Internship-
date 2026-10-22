# JavaScript Assignment Project

This project contains all 6 JavaScript assignments and the final capstone project from the provided JavaScript curriculum.

## Folder Structure

- `assignments/assignment1.js` — Variables, data types and console operations
- `assignments/assignment2.js` — Operators, expressions and input handling
- `assignments/assignments3.js` — Conditional logic
- `assignments/assignment4.js` — Loop control
- `assignments/assignment5.js` — Functions and scope
- `assignments/assignment6.js` — Arrays, objects and core methods
- `assignments/run-assignment2.html` — Browser runner for Assignment 2
- `capstone/` — Interactive Product Inventory & Analytics Dashboard

## How to Run Assignments

Open the project folder in VS Code.

For Assignments 1, 3, 4, 5 and 6:

```bash
node assignments/assignment1.js
node assignments/assignment3.js
node assignments/assignment4.js
node assignments/assignment5.js
node assignments/assignment6.js
```

Assignment 2 uses `prompt()`, so open:

`assignments/run-assignment2.html`

Then open the browser Developer Console and click **Run Assignment 2**.

## How to Run the Capstone

Open:

`capstone/index.html`

in a browser.

For the assignment's prompt requirement, click:

**Quick Add with prompt()**

Enter:

- Product Name: `Monitor`
- Price: `150`

The dashboard will update the inventory, category badge, financial analytics and transformed report.

## Capstone Features

- Product input with explicit `Number()` conversion
- `if...else` validation
- `switch` category assignment
- loops with `break` and `continue`
- regular and arrow functions
- local function scope
- `forEach()`
- `filter()`
- `map()`
- responsive dashboard UI
- inventory statistics
- tax and discount calculations
- transformed report

## Expected Capstone Example

Existing:

- Laptop — $800
- Mouse — $25

Add:

- Monitor — $150

Then:

- Total inventory = $975
- Affordable items under $200 = Mouse and Monitor
- Laptop = Premium
- Mouse = Budget
- Monitor = Standard

Transformed report:

```text
[
  "LAPTOP: $800.00",
  "MOUSE: $25.00",
  "MONITOR: $150.00"
]
```
