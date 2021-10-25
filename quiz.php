<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1604543236:AAFlunpFH89VlIaW77IvoxEYLlYy2ND9fUE";

//Сюда вставляем chat_id
$chat_id = "-582137612";

//Определяем переменные для передачи данных из нашей формы
    $construction = ($_POST['stage']);
    $texture = ($_POST['goal']);
    $lighting = ($_POST['date']);
    if (is_array($lighting)) {
     $lighting = implode(", ", $lighting);
    }
    $calculation = ($_POST['city']);
    if (is_array($calculation)) {
        $calculation = implode(", ", $calculation);
       }
    $name = ($_POST['name']);
    $phone = ($_POST['number']);

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Этап:' => $construction,
        'Цель:' => $texture,
        'Даты:' => $lighting,
        'Место:' => $calculation,
        'Куда отправить:' => $name,
        'Телефон:' => $phone
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


//А здесь сообщение об ошибке при отправке
    else {
      alert('Что-то пошло не так. Попробуйте отправить форму ещё раз.');
    }

?>