<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>
<body>
    <label for="inText">Enter text here:</label>
    <input type="text" required id="inText" /><br />
    <button onclick="sbtBtn()">Translate</button><br />
    <div id="result"></div>
    <script>
        function sbtBtn() {
            var text = document.getElementById("inText").value;
            console.log(text);
            var vowels = ["a", "e", "i", "o", "u"];
            var result = "";
            for (let i = 0; i < text.length; i++) {
                let element = text[i];
                if (element === " ") {
                    result += " ";
                } else if (vowels.includes(element.toLowerCase())) {
                    result += element;
                } else {
                    result += element + "o" + element;
                }
            }
            document.getElementById("result").innerHTML = result;
        }
    </script>
</body>
</html>
