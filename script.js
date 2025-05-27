function calculateGST() {
  const amount = parseFloat(document.getElementById("amount").value);
  const rate = parseFloat(document.getElementById("gst-rate").value);

  if (isNaN(amount)) {
    alert("Please enter a valid amount.");
    return;
  }

  const gst = (amount * rate) / 100;
  const cgst = gst / 2;
  const sgst = gst / 2;
  const totalAmount = amount + gst;

  document.getElementById("cgst").textContent = cgst.toFixed(2);
  document.getElementById("sgst").textContent = sgst.toFixed(2);
  document.getElementById("total-gst").textContent = gst.toFixed(2);
  document.getElementById("total-amount").textContent = totalAmount.toFixed(2);
}
