<?php
    $name = reformData($_POST['name']);
    $email = reformData($_POST['email']);
    $message = reformData($_POST['message']);

    function reformData($data) {
        $data = htmlspecialchars($data);
        $data = urldecode($data);
        $data = trim($data);

        return $data;
    }

    mail("donating1@yandex.ru", "Письмо с сайта-портфолио", "Имя отправителя: ".$name.". E-mail отправителя: ".$email.". Сообщение: ".$message);
    header("Location: localhost");
?>navigation