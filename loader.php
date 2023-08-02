<?php
// Кол-во элементов на странице
$limit = 3;

// Подключение к БД
$dbh = new PDO('mysql:dbname=db_name;host=localhost', 'логин', 'пароль');

// Получение записей для текущей страницы
$page = intval(@$_GET['page']);
$page = (empty($page)) ? 1 : $page;
$start = ($page != 1) ? $page * $limit - $limit : 0;
$sth = $dbh->prepare("SELECT SQL_CALC_FOUND_ROWS * FROM `prods` LIMIT {$start}, {$limit}");
$sth->execute();
$items = $sth->fetchAll(PDO::FETCH_ASSOC);

// Узнаем сколько всего записей в БД
$sth = $dbh->prepare("SELECT FOUND_ROWS()");
$sth->execute();
$total = $sth->fetch(PDO::FETCH_COLUMN);
$amt = ceil($total / $limit);
