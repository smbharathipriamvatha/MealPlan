// Function to open the modal for adding meal URL
function addMeal(day, mealNum) {
  const modal = document.getElementById("mealModal");
  const mealSlot = document.getElementById(`meal${mealNum}`);
  mealSlot.innerHTML = ""; // Clear any previous content
  modal.style.display = "flex";
  
  // Store the meal slot to save the URL
  modal.dataset.mealSlot = `${day}-${mealNum}`;
}

// Function to save the meal with the URL
function saveMeal() {
  const modal = document.getElementById("mealModal");
  const mealSlot = document.getElementById(modal.dataset.mealSlot);
  const mealUrl = document.getElementById("meal-url").value;

  if (mealUrl) {
    // Create a clickable link to the meal
    const link = document.createElement("a");
    link.href = mealUrl;
    link.target = "_blank";
    link.textContent = "Open Meal";
    mealSlot.innerHTML = ""; // Clear previous content
    mealSlot.appendChild(link);
    modal.style.display = "none";
  } else {
    alert("Please enter a URL.");
  }
}

// Close the modal when clicked outside of it
window.onclick = function(event) {
  const modal = document.getElementById("mealModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

