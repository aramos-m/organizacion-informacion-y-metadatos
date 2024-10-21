<!DOCTYPE html>
<html>
    <head>
        <script>
        function Encender() {
            document.getElementById('imagen').src = 'pic_on.gif';
        }

        function Apagar() {
            document.getElementById('imagen').src = 'pic_off.gif';
        }
    </script>
    </head>
    <body>

        <h2>DEMO</h2>

        <p>JavaScript puede cambiar valores de atributos del HTML.</p>
        <p>Por ejemplo, cambia el valor del atributo src de una imagen.</p>

        <img id="imagen" src="pic_off.gif" style="width:100px">

        <button type="button" onclick="Encender()">ENCIENDE</button> 
        <button type="button" onclick="Apagar()">APAGA</button>

    </body>
</html>