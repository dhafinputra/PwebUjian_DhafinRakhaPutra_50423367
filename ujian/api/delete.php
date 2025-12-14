<?php
require "db.php";

$input = json_decode(file_get_contents("php://input"), true);
$id = $input['id'] ?? 0;

$stmt = $pdo->prepare("DELETE FROM notes WHERE id = :id");
$stmt->execute([':id' => $id]);

echo json_encode(["success" => true]);
