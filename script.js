function calculatePrice() {
    let basePrice = 100;
    let finalPrice = basePrice;

    // Education
    const education = parseFloat(document.getElementById("education").value);
    finalPrice *= education;

    // Family Net Worth
    const netWorth = parseFloat(document.getElementById("net-worth").value);
    finalPrice *= netWorth;

    // Caste
    const caste = parseFloat(document.getElementById("caste").value);
    finalPrice += caste;

    // Skills
    if (document.getElementById("skill-music").checked) {
        finalPrice += parseFloat(document.getElementById("skill-music").value);
    }
    if (document.getElementById("skill-cook").checked) {
        finalPrice += parseFloat(document.getElementById("skill-cook").value);
    }
    if (document.getElementById("skill-easygoing").checked) {
        finalPrice += parseFloat(document.getElementById("skill-easygoing").value);
    }
    if (document.getElementById("skill-sing").checked) {
        finalPrice += parseFloat(document.getElementById("skill-sing").value);
    }

    // Age
    const ageRadios = document.getElementsByName("age");
    for (let i = 0; i < ageRadios.length; i++) {
        if (ageRadios[i].checked) {
            finalPrice *= parseFloat(ageRadios[i].value);
        }
    }

    // Reputation
    if (document.getElementById("reputation-parents").checked) {
        finalPrice *= parseFloat(document.getElementById("reputation-parents").value);
    }
    if (document.getElementById("reputation-character").checked) {
        finalPrice *= parseFloat(document.getElementById("reputation-character").value);
    }
    if (document.getElementById("reputation-general").checked) {
        finalPrice += parseFloat(document.getElementById("reputation-general").value);
    }

    // Display Final Price
    document.getElementById("final-price").textContent = finalPrice.toFixed(2);
}
