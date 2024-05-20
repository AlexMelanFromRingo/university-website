<?php
header('Content-Type: application/json');

// Отримайте параметр count з URL-адреси запиту. Якщо він відсутній, використовуйте 1 як значення за замовчуванням.
$count = isset($_GET['count']) ? (int)$_GET['count'] : 1;

// Обмежте кількість записів 5, як вказано в завданні.
if ($count > 5) {
    $count = 5;
}

$data = [
    "count" => $count,
    "data" => []
];

// Генеруйте випадкові дані для кожного запису.
for ($i = 0; $i < $count; $i++) {
    $data["data"][] = [
        "id" => $i + 1,
        "name" => "Ім'я користувача " . ($i + 1),
        "date" => date('Y-m-d H:i:s')
    ];
}

echo json_encode($data);
?>
