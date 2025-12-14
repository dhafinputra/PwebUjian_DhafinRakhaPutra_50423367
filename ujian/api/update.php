<?php
require "db.php";

$input = json_decode(file_get_contents("php://input"), true);

$id = $input['id'] ?? 0;
$title = $input['title'] ?? '';
$content = $input['content'] ?? '';

$stmt = $pdo->prepare("UPDATE notes SET title = :t, content = :c WHERE id = :id");
$stmt->execute([':t' => $title, ':c' => $content, ':id' => $id]);

echo json_encode(["success" => true]);
