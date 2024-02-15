/*
from `ui.html`:


<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>My Plugin UI</title>
  </head>
 <body>
    <button id="moveButton">Move Elements</button>
        <script>
      document.getElementById('moveButton').addEventListener('click', function() {
        parent.postMessage({ pluginMessage: { type: 'move-elements' } }, '*');
      });
    </script>
 </body>
</html>
















*/