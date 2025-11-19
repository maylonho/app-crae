<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

header('Content-Type: application/json');
$pdo = new PDO("mysql:host=localhost;dbname=curso", "root", "");
$query = $pdo->query("SELECT * FROM produtos ORDER BY id DESC");
echo json_encode($query->fetchAll(PDO::FETCH_ASSOC));