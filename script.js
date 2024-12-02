
function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput) {
        displayMessage(userInput, "user");

        // Show typing indicator
        const typingIndicator = document.getElementById("typingIndicator");
        typingIndicator.style.display = "block";

        setTimeout(() => {
            // Hide typing indicator and respond
            typingIndicator.style.display = "none";
            const botReply = "I am here to assist you: " + userInput;
            displayMessage(botReply, "bot");
        }, 1500);
    }
    document.getElementById("user-input").value = "";
}


function displayMessage(message, sender) {
    const chatWindow = document.getElementById("chat-window");
    const messageElement = document.createElement("p");

    if (sender === "user") {
        messageElement.className = "user-message";
    } else {
        messageElement.className = "bot-message";
    }

    messageElement.innerText = message;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}


function handleUserMessage(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}


function updateButtonIcon(icon) {
    const button = document.querySelector(".chat-button");
    button.innerText = icon;
}


function updateBorderColor() {
    const color = document.getElementById("border-color").value;
    document.querySelector(".chatbot").style.borderColor = color;
}

function updateBorderRadius() {
    const radius = document.getElementById("border-radius").value;
    document.querySelector(".chatbot").style.borderRadius = `${radius}px`;
}


function updateHeaderColor() {
    const color = document.getElementById("header-bg-color").value;
    document.querySelector(".header").style.backgroundColor = color;
}

function updateBotTextColor() {
  const botTextColor = document.getElementById("bot-text-color").value;
  document.documentElement.style.setProperty("--bot-text-color", botTextColor);
}
function updateBotBubbleColor() {
  document.documentElement.style.setProperty("--bot-bubble-color", document.getElementById("bot-bubble-color").value);
}

function updateUserTextColor() {
  document.documentElement.style.setProperty("--user-text-color", document.getElementById("user-text-color").value);
}

function updateUserBubbleColor() {
  document.documentElement.style.setProperty("--user-bubble-color", document.getElementById("user-bubble-color").value);
}

function updateFontStyle(fontStyle) {
  document.documentElement.style.setProperty("--chat-font-style", fontStyle);
}
