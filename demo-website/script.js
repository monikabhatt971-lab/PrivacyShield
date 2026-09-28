const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const protectButton = document.getElementById("protectButton");
const voiceButton = document.getElementById("voiceButton");


// =========================
// PROTECT DATA
// =========================

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


    // =========================
    // EMAIL DETECTION
    // =========================

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


    // =========================
    // PHONE DETECTION
    // =========================

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


    // Show protected text
    outputText.textContent = text;

});


// =========================
// CLEAR OUTPUT WHEN INPUT IS EMPTY
// =========================

inputText.addEventListener("input", function () {

    if (inputText.value.trim() === "") {
        outputText.textContent = "";
    }

});


// =========================
// VOICE TO TEXT
// =========================

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;


if (SpeechRecognition) {

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";

    recognition.continuous = true;

    recognition.interimResults = false;


    // Start listening
    voiceButton.addEventListener("click", function () {

        recognition.start();

        voiceButton.textContent = "🔴 Listening...";
    });


    // Convert speech to text
    recognition.addEventListener("result", function (event) {

        const transcript =
            event.results[event.results.length - 1][0].transcript;

        inputText.value +=
            (inputText.value ? " " : "") + transcript;

    });


    // Stop listening
    recognition.addEventListener("end", function () {

        voiceButton.textContent = "🎤 Speak";

    });


} else {

    // Browser does not support speech recognition
    voiceButton.disabled = true;

    voiceButton.textContent = "Voice not supported";

}