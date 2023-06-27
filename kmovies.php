<!DOCTYPE html>
<html>
<head>
    <title>kMovies 24/7</title>
</head>
<body>
    <h1>Current Time: <?php echo (new DateTime('now', new DateTimeZone('Asia/Manila')))->format('H:i'); ?></h1>

    <button onclick="loadPHP()">Load PHP Output</button>
    
    <div id="output"></div>

    <script>
        function loadPHP() {
            fetch('jhttps://koalaxpanda.000webhostapp.com/kmovies.php')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('output').innerHTML = data;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    </script>
</body>
</html>
