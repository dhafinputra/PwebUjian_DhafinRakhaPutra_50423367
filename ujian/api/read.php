<?php
require "db.php";

$stmt = $pdo->query("SELECT * FROM notes ORDER BY created_at DESC");
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);
