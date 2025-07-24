function checkLove() {
  const yourName = document.getElementById("yourName").value.trim().toLowerCase();
  const partnerName = document.getElementById("partnerName").value.trim().toLowerCase();
  const result = document.getElementById("result");

  if (!yourName || !partnerName) {
    result.textContent = "❗ Please enter both names!";
    result.style.color = "crimson";
    return;
  }

  // Combine names
  const combined = yourName + partnerName;

  // Count letters from the word 'truelove'
  const letters = "truelove";
  let counts = [];

  for (let char of letters) {
    const count = combined.split("").filter(c => c === char).length;
    counts.push(count);
  }

  // Reduce to two digits
  while (counts.length > 2) {
    let temp = [];
    for (let i = 0; i < counts.length - 1; i++) {
      let sum = counts[i] + counts[i + 1];
      temp.push(sum % 10); // to keep it single digit
    }
    counts = temp;
  }

  const loveScore = parseInt(counts.join(""));

  result.innerHTML = `❤️ ${yourName} & ${partnerName} = <strong>${loveScore}%</strong> love! 💕`;

  result.style.color = loveScore >= 70 ? "green" :
                       loveScore >= 40 ? "orange" : "red";
}
