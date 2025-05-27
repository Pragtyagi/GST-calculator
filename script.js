function calculateGST() {
  const amount = parseFloat(document.getElementById("amount").value);
  const rate = parseFloat(document.getElementById("gst-rate").value);
  const type = document.getElementById("gst-type").value;

  if (isNaN(amount)) {
    alert("Please enter a valid amount.");
    return;
  }

  let cgst = 0, sgst = 0, gst = 0, totalAmount = 0, preTaxAmount = 0;

  if (type === "exclusive") {
    gst = (amount * rate) / 100;
    cgst = gst / 2;
    sgst = gst / 2;
    totalAmount = amount + gst;
    preTaxAmount = amount;
  } else if (type === "inclusive") {
    const divisor = 1 + (rate / 100);
    preTaxAmount = amount / divisor;
    gst = amount - preTaxAmount;
    cgst = gst / 2;
    sgst = gst / 2;
    totalAmount = amount;
  }

  document.getElementById("cgst").textContent = cgst.toFixed(2);
  document.getElementById("sgst").textContent = sgst.toFixed(2);
  document.getElementById("total-gst").textContent = gst.toFixed(2);
  document.getElementById("pre-tax").textContent = preTaxAmount.toFixed(2);
  document.getElementById("total-amount").textContent = totalAmount.toFixed(2);
  document.getElementById("results").style.display = "block";
}

function clearFields() {
  document.getElementById("amount").value = "";
  document.getElementById("results").style.display = "none";
}

function copyResults() {
  const results = `
  CGST: ₹${document.getElementById("cgst").textContent}
  SGST: ₹${document.getElementById("sgst").textContent}
  Total GST: ₹${document.getElementById("total-gst").textContent}
  Amount without GST: ₹${document.getElementById("pre-tax").textContent}
  Total Payable Amount: ₹${document.getElementById("total-amount").textContent}
  `;
  navigator.clipboard.writeText(results);
  alert("Results copied to clipboard!");
}
