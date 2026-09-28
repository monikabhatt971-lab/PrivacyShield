const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const protectButton = document.getElementById("protectButton");

protectButton.addEventListener("click", function () {

    let text = inputText.value.trim();

    // Agar input empty hai
    if (text === "") {
        outputText.textContent = "Enter some text to protect.";
        return;
    }

    const emailMap = {};
    const phoneMap = {};

    let emailCount = 0;
    let phoneCount = 0;

    // Email detection and masking
    text = text.replace(
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
        function (email) {

            if (!emailMap[email]) {
                emailCount++;
                emailMap[email] =
                    `[EMAIL_${String(emailCount).padStart(2, "0")}]`;
            }

            return emailMap[email];
        }
    );

    // Phone detection and masking
    text = text.replace(
        /\b\d{10}\b/g,
        function (phone) {

            if (!phoneMap[phone]) {
                phoneCount++;
                phoneMap[phone] =
                    `[PHONE_${String(phoneCount).padStart(2, "0")}]`;
            }

            return phoneMap[phone];
        }
    );

    outputText.textContent = text;

    inputText.addEventListener("input", function () {

    if (inputText.value.trim() === "") {
        outputText.textContent = "";
    }});


});