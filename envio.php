<!DOCTYPE html>
<html lang="pt-br">
<head>
	<title> Tatto </title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<meta name="viewport" content="width=device-width, user-scalable=no">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet">
</head>
<body>
	<section id="contato">
		<div id="formulario">
			<form id="mensagem">

				<?php

				$vmail = 'jhonatan98rios@gmail.com';
				$vnome = $_GET['nome'];
				$vemail = $_GET['email'];
				$vfone = $_GET['fone'];
				$vassunto = " Nome: " . $vnome . " - Email:   " . $vemail . " - Telefone:   " . $vfone ;
				$vmsg = $_GET['msg'];

				if(mail($vmail, $vassunto, $vmsg)){
					echo "<h2>Mensagem enviada</h2>";
				}else{
					echo "<h2>Erro ao enviar</h2>";
				}
				?>

				<a href="index.html"> <h3> Voltar </h3> </a>

			</form>
		</div>
	</section>
</body>
</html>

