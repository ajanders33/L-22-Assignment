// invoice.js

function createInvoice() {
  // Step 2: Retrieve values from form elements
  /* var customerName = document.getElementById("customerName").value;*/
  var customerName = document.getElementById("name").value;
  var itemName = document.getElementById("item1").value;
  var itemName = document.getElementById("item2").value;
  var itemName = document.getElementById("item3").value;
  var itemPrice = parseFloat(document.getElementById("price1").value);
  var itemPrice = parseFloat(document.getElementById("price2").value);
  var itemPrice = parseFloat(document.getElementById("price3").value);

  // Step 4: Calculate subtotal, tax, and total amounts
  var subtotal = itemPrice;
  var taxRate = 0.07; // 7% tax rate
  var tax = taxRate * subtotal;
  var total = subtotal + tax;

  // Step 5: Format calculated amounts to two decimal places
  tax = tax.toFixed(2);
  total = total.toFixed(2);

  // Step 6: Dynamically generate invoice content using template literals
  var invoiceContent = `
      <h2>Invoice</h2>
      <p><strong>Customer:</strong> ${customerName}</p>
      <p><strong>Item:</strong> ${itemName}</p>
      <p><strong>Item Price:</strong> $${itemPrice.toFixed(2)}</p>
      <p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
      <p><strong>Tax:</strong> $${tax}</p>
      <p><strong>Total:</strong> $${total}</p>
    `;

  // Step 7: Create a new blank window
  var newWindow = window.open();

  // Step 8: Write the invoice content to the new window
  newWindow.document.write(invoiceContent);
}
