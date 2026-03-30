    const calc = document.querySelector(".Calculate");
    const res = document.querySelector(".result");

    calc.addEventListener("click", () => {
      // Get input values
      let heightCm = parseFloat(document.querySelector("#height").value);
      let weightKg = parseFloat(document.querySelector("#weight").value);

      if (!heightCm || !weightKg) {
        res.textContent = "Please enter both height and weight!";
        return;
      }

      // Convert height to meters
      let heightM = heightCm / 100;

      // BMI calculation
      let bmi = weightKg / (heightM * heightM);
      bmi = bmi.toFixed(2); // Round to 2 decimals

      // Show BMI with category
      let category = "";
      if (bmi < 18.5) category = "Underweight";
      else if (bmi < 25) category = "Normal";
      else if (bmi < 30) category = "Overweight";
      else category = "Obese";

      res.textContent = `BMI: ${bmi} (${category})`;
    });