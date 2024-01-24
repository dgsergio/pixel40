<?php
session_start();

if ($_POST) {
    $_SESSION['user'] = $_POST['user'];
    $_SESSION['pass'] = $_POST['pass'];
    if (  strtolower($_SESSION['user']) == 'sergio' &&  $_SESSION['pass'] == 'pass-aca') {
        header('location:index.php');
    } else {
        echo "  <script>
                    alert('Usuario y/o contraseña incorrecta')
                </script>";
    }
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex">
    <link rel="shortcut icon" href="../favicon.ico" />
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css">
    <title>Iniciar Sesión</title>
</head>
<body>
    <div class="container">
        <div class="row justify-content-md-center loguear">
            <div class="col col-lg-4">
                <div class="card">
                    <div class="card-header text-center text-uppercase">
                        <h3>Iniciar Sesion</h3>
                    </div>
                    <div class="card-body">
                        <form action="login.php" method="post">
                            <div class="form-group">
                                <label>Ingresar usuario</label>
                                <input type="text" required class="form-control" name="user" placeholder="Ususario">
                            </div>
                            <div class="form-group">
                                <label>Contraseña</label>
                                <input type="password" required class="form-control" name="pass" placeholder="******">
                            </div>
                            <div class="text-center">
                                <input type="submit" class="btn btn-primary btn-block text-uppercase" value="Iniciar">
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-muted text-center">
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
