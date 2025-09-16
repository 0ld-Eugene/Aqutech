<?php
// Убедимся, что запрос пришёл методом POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Получаем данные из формы
    $name  = trim($_POST['name'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $email = trim($_POST['email'] ?? '');

    // Простая базовая проверка
    if ($name && $phone && $email) {
        // Куда отправляем письмо
        $to = "uvm-rf.ru@yandex.com";

        $subject = "Новая заявка с сайта";
        $message = "Имя: $name\nТелефон: $phone\nEmail: $email";

        $headers = "From: no-reply@{$_SERVER['SERVER_NAME']}\r\n" .
                   "Reply-To: $email\r\n" .
                   "Content-Type: text/plain; charset=UTF-8\r\n";

        // Отправляем письмо
        if (mail($to, $subject, $message, $headers)) {
            echo "success";
        } else {
            echo "error";
        }
    } else {
        echo "validation_error";
    }
} else {
    echo "wrong_method";
}
?>
