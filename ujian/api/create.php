<?php
require "db.php";

$input = json_decode(file_get_contents("php://input"), true);
$title = $input['title'] ?? '';
$content = $input['content'] ?? '';

if ($title === "") {
    echo json_encode(["success" => false, "message" => "Title required"]);
    exit;
}

$stmt = $pdo->prepare("INSERT INTO notes (title, content) VALUES (:t, :c)");
$stmt->execute([':t' => $title, ':c' => $content]);

echo json_encode(["success" => true]);
