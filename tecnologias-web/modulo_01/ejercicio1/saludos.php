<?php
    $vueltas = $_GET['num']; //Para leer el parámetro (e.g. ?num=10)
    echo '<h1>Me has pedido que te salude ' . $vueltas . ' veces.</h1>';
    for ($i = 0; $i < $vueltas; $i++)
    {
        echo '<p>' . $i . ' - ¡Hola Mundo!</p>';
    }
?> 