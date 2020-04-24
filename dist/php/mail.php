<?php
    $name = reformData($_POST['name']);
    $email = reformData($_POST['email']);
    $message = reformData($_POST['message']);

    function reformData($data) {
        $data = htmlspecialchars($data);
        $data = urldecode($data);
        $data = trim($data);
    }

    $name = 5;

    echo $name;
    echo "<br>";
    echo $email;
    echo "<br>";
    echo $message;
?>