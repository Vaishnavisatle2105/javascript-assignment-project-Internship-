// CAPSTONE: Interactive Product Inventory & Analytics Dashboard
// Requirements demonstrated:
// prompt + Number conversion, if/else, switch, loops, break/continue,
// regular + arrow functions, local scope, forEach, filter and map.

const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

const AFFORDABLE_LIMIT = 200;

// if...else: validate input
function validateProduct(name, price) {
  if (!name || name.trim() === "") {
    return "Product name is required.";
  } else if (!Number.isFinite(price) || price <= 0) {
    return "Price must be a number greater than 0.";
  }
  return "";
}

// switch: assign category badge using dynamic price ranges
function getCategory(price) {
  let categoryCode;

  if (price < 100) {
    categoryCode = 1;
  } else if (price < 500) {
    categoryCode = 2;
  } else {
    categoryCode = 3;
  }

  switch (categoryCode) {
    case 1:
      return "Budget";
    case 2:
      return "Standard";
    case 3:
      return "Premium";
    default:
      return "Unknown";
  }
}

// Regular function: total inventory statistics
function getInventoryStats(items) {
  let total = 0;

  // loop + continue
  for (let i = 0; i < items.length; i++) {
    if (!items[i] || !Number.isFinite(items[i].price)) {
      continue;
    }
    total += items[i].price;
  }

  // search using loop + break
  let firstAffordable = null;
  for (let i = 0; i < items.length; i++) {
    if (items[i].price < AFFORDABLE_LIMIT) {
      firstAffordable = items[i];
      break;
    }
  }

  return {
    total,
    count: items.length,
    average: items.length ? total / items.length : 0,
    firstAffordable
  };
}

// Arrow function: custom tax/discount with local scope
const calculateFinancials = (total, taxRate = 0.05, discountRate = 0.10) => {
  const tax = total * taxRate;                 // local scope
  const discount = total * discountRate;       // local scope

  return {
    tax,
    discount,
    afterDiscount: total - discount
  };
};

// forEach, filter and map
function renderDashboard() {
  const stats = getInventoryStats(inventory);
  const financials = calculateFinancials(stats.total);

  document.getElementById("totalProducts").textContent = stats.count;
  document.getElementById("inventoryValue").textContent = money(stats.total);
  document.getElementById("affordableCount").textContent =
    inventory.filter(item => item.price < AFFORDABLE_LIMIT).length;
  document.getElementById("averagePrice").textContent = money(stats.average);

  document.getElementById("analyticsTotal").textContent = money(stats.total);
  document.getElementById("taxEstimate").textContent = money(financials.tax);
  document.getElementById("discountEstimate").textContent = money(financials.discount);
  document.getElementById("afterDiscount").textContent = money(financials.afterDiscount);

  const affordableOnly = document.getElementById("affordableOnly").checked;
  const visibleItems = affordableOnly
    ? inventory.filter(item => item.price < AFFORDABLE_LIMIT)
    : inventory;

  const body = document.getElementById("inventoryBody");
  body.innerHTML = "";

  // forEach final inventory display
  visibleItems.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${escapeHtml(item.name)}</td>
      <td>${money(item.price)}</td>
      <td><span class="badge">${getCategory(item.price)}</span></td>
    `;
    body.appendChild(row);
  });

  // map transformed report
  const report = inventory.map(item =>
    `${item.name.toUpperCase()}: ${money(item.price)}`
  );
  document.getElementById("reportOutput").textContent =
    JSON.stringify(report, null, 2);
}

function money(value) {
  return "$" + Number(value).toFixed(2);
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function addProduct(name, price) {
  const error = validateProduct(name, price);

  if (error) {
    document.getElementById("message").textContent = error;
    return false;
  }

  inventory.push({
    name: name.trim(),
    price
  });

  document.getElementById("message").textContent =
    `${name.trim()} added successfully.`;
  renderDashboard();
  return true;
}

// Visible form
document.getElementById("productForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("productName").value;
  const price = Number(document.getElementById("productPrice").value);

  addProduct(name, price);

  if (validateProduct(name, price) === "") {
    event.target.reset();
  }
});

// Required prompt() flow from the assignment
document.getElementById("promptAddBtn").addEventListener("click", () => {
  const name = prompt("Enter new product name:");
  if (name === null) return;

  const price = Number(prompt("Enter product price:"));

  // Explicit Number conversion + validation
  addProduct(name, price);
});

document.getElementById("affordableOnly").addEventListener("change", renderDashboard);

// Initialize with existing products.
// Click "Quick Add with prompt()" and enter Monitor + 150 to reproduce
// the assignment's expected final inventory and analytics.
renderDashboard();
