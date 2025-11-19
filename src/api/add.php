<?php
// CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Se for preflight, apenas responda e saia
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$pdo = new PDO("mysql:host=localhost;dbname=curso", "root", "");

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["error" => "Invalid JSON"]);
    exit();
}

$stmt = $pdo->prepare("INSERT INTO produtos (nome, preco) VALUES (?,?)");
$stmt->execute([$data['nome'], $data['preco']]);

echo json_encode(["status" => "ok"]);
