function runCode() {
    try {
        // Get the user's code from the textarea
        var userCode = document.getElementById("codeInput").value;

        // Create a new script element
        var script = document.createElement("script");

        // Set the script content to the user's code
        script.innerHTML = `
            try {
                // Capture console.log output
                var log = [];
                console.log = function(message) {
                    log.push(message);
                };

                ${userCode}

                // Display output in the HTML
                document.getElementById("output").innerHTML = log.join('<br>');
            } catch (error) {
                // Display the error message
                document.getElementById("output").innerHTML = "Error: " + error.message;
            }
        `;

        // Append the script to the document
        document.body.appendChild(script);

    } catch (error) {
        // Display the error message
        document.getElementById("output").innerHTML = "Error: " + error.message;
    }
}

function resizeTextarea() {
    // Adjust the height of the textarea dynamically
    var textarea = document.getElementById("codeInput");
    textarea.style.height = "auto";
    textarea.style.height = (textarea.scrollHeight) + "px";
}