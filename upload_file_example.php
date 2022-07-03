<?php


/* if (($_FILES["file"]["type"] == "image/pjpeg")
    || ($_FILES["file"]["type"] == "image/jpeg")
    || ($_FILES["file"]["type"] == "image/png")
    || ($_FILES["file"]["type"] == "image/gif")) {
        if (move_uploaded_file($_FILES["file"]["tmp_name"], "../vistas/partials/images/avatars/".$_FILES['file']['name'])) {
            //more code here...
            echo "../vistas/partials/images/avatars/".$_FILES['file']['name'];
        } else {
            echo 0;
        }
} else {
    echo 0;
}

if (($_FILES["file_miniatura"]["type"] == "image/pjpeg")
    || ($_FILES["file_miniatura"]["type"] == "image/jpeg")
    || ($_FILES["file_miniatura"]["type"] == "image/png")
    || ($_FILES["file_miniatura"]["type"] == "image/gif")) {
    if (move_uploaded_file($_FILES["file_miniatura"]["tmp_name"], "../vistas/partials/images/miniaturas/".$_FILES['file_miniatura']['name'])) {
        //more code here...
        echo "../vistas/partials/images/miniaturas".$_FILES['file_miniatura']['name'];
    } else {
        echo 0;
    }
} else {
    echo 0;
}
 */


if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {

    //inicializamos algunas variables con información sobre el archivo cargado.
    $fileTmpPath = $_FILES['file']['tmp_name'];
    $fileName = $_FILES['file']['name'];
    $fileSize = $_FILES['file']['size'];
    $fileType = $_FILES['file']['type'];
    $fileNameCmps = explode(".", $fileName);
    $fileExtension = strtolower(end($fileNameCmps));

    //limpiar el nombre del archivo
    $newFileName = md5(time() . $fileName) . '.' . $fileExtension;

    //restringir el tipo de archivo que se puede cargar a ciertas extensiones 
    //extensiones de archivo permitidas
    //$allowedfileExtensions = array('jpg', 'gif', 'png', 'jpeg', 'pjpeg', 'zip', 'txt', 'xls', 'doc');
    $allowedfileExtensions = array('jpg', 'gif', 'png', 'jpeg', 'pjpeg',);
    if (in_array($fileExtension, $allowedfileExtensions)) {
      //...
        echo "archivo permitido";
    }

    if (($fileType == "image/pjpeg") || ($fileType == "image/jpeg") || ($fileType == "image/jpg") || ($fileType == "image/png") || ($fileType == "image/gif")) {

    }else{
        echo "error typo";
        return false;
    }

    if (!(strpos($fileType, "gif") || strpos($fileType, "jpeg") || strpos($fileType, "jpg") || strpos($fileType, "png"))) {
       
    }

   /*  if (!((strpos($fileType, "gif") || strpos($fileType, "jpeg") || strpos($fileType, "jpg") || strpos($fileType, "png")) && ($fileSize < 2000000))) {
        echo "Error Extencion incorrecta.(Se permiten archivos .gif, .jpg, .png)";
        return false;
    } */

    if($fileSize > 2000000){
        echo "Error tamaño icnorrecto 200 kb como máximo.";
        return false;
    }else{
        echo "tamaño correcto";
    }

    // directorio en el que se moverá el archivo cargado
    $uploadFileDir = '../vistas/partials/images/avatars/';
    $dest_path = $uploadFileDir . $newFileName;
    
    if(move_uploaded_file($fileTmpPath, $dest_path))
    {
        echo 'File is successfully uploaded.';
        chmod($dest_path, 0777);
        echo $dest_path;
    }
    else
    {
      echo 'There was some error moving the file to upload directory. Please make sure the upload directory is writable by web server.';
    }


    
}

