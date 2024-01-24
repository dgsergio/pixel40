<?php
session_start();
if (strtolower($_SESSION['user']) != 'sergio' ||  $_SESSION['pass'] != 'pass-aca') {
    header('location:login.php');
}
if ($_FILES && $_FILES['Archivo']['name'] != "" ){    
    move_uploaded_file($_FILES['Archivo']['tmp_name'], '../img/dl/'.$_FILES['Archivo']['name']);
    echo "  
        <div class='alert alert-success text-center text-uppercase' role='alert' id='pop-upload'>
            Archivo cargado con éxito.
        </div>
        <script>
        setTimeout(() => {
            document.getElementById('pop-upload').remove();
        }, 3000);
        </script>
";
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
    <title>Carga de Imágenes</title>
    <link rel="stylesheet" href="../css/style.css" />
        
</head>
<body>
    <div class="container">
        <div class="row justify-content-md-center loguear">
            <div class="col col-lg-6">
                <div class="card">
                    <div class="card-header text-center text-uppercase">
                        <h3>Subir Archivo</h3>
                    </div>
                    <div class="card-body">
                        <form action="index.php" method="post" enctype="multipart/form-data">
                            <div class="form-group">
                                <input type="file" required class="form-control" name="Archivo">
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btn btn-primary btn-block text-uppercase" value="Upload">
                                <a class="btn btn-danger btn-block text-uppercase" href="logout.php">Cerrar sesión</a> 
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