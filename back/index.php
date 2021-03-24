<?php
require("mysql/mysqli.php");

$mysql = new _mysqli();

$mysql->query('SELECT date_placed as date, CONCAT(`first_name`, " ", `last_name`) as name, count(`order_num`) as quantity, sum(total) as sum_total FROM `orders` WHERE date_placed BETWEEN "2018-10-01" AND "2018-10-31" GROUP BY cust_code ORDER BY sum_total DESC');

header('Content-Type: application/json');
echo json_encode($mysql->data);