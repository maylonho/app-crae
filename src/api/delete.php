<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$id = $_GET['id'];
$pdo = new PDO("mysql:host=localhost;dbname=curso", "root", "");
$pdo->query("DELETE FROM produtos WHERE id=$id");
echo json_encode(["status" => "deleted"]);