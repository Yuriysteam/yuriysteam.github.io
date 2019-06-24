<?php
$mailTo = 'lenbar20@gmail.com';
  $message = "<h3 style='margin:0; padding:0;'>Company name: </h3>".$_POST['companyName']."<br>";
  $message .= "<h3 style='margin:0; padding:0;'>Contact phone: </h3>".$_POST['phone']."<br>"; 
  $message .= "<h3 style='margin:0; padding:0;'>Towage request: </h3>";
  $message .= "<b>from: </b>".$_POST['from']."<br>";
  $message .= "<b>  to: </b>".$_POST['to']."<br>"; 
  $message .= "<h3 style='margin:0; padding:0;'>Details </h3> <h3 style='margin:0; padding:0;'>Cargo characteristics: </h3>".$_POST['cargo']."<br>"; 
  $message .= "<h3 style='margin:0; padding:0;'>Towage requirements: </h3>".$_POST['towage']."<br>"; 
  $subject = "Request from ".$_POST['companyName'];
  $r = sendMailAttachment($mailTo, $subject, $message); // отправка письма c вложением
  echo ($r) ? true : false;
function sendMailAttachment($mailTo, $subject, $message){

  $to = $mailTo;

  $EOL = "\r\n"; 
  $boundary     = "--".md5(uniqid(time())); 

  $headers    = "MIME-Version: 1.0;$EOL";   
  $headers   .= "Content-Type: multipart/mixed; boundary=\"$boundary\"$EOL";  

  $multipart  = "--$boundary$EOL";   
  $multipart .= "Content-Type: text/html; charset=utf-8$EOL";   
  $multipart .= "Content-Transfer-Encoding: base64$EOL";   
  $multipart .= $EOL; // раздел между заголовками и телом html-части 
  $multipart .= chunk_split(base64_encode($message));   

  #начало вставки файлов
if(!empty($_FILES["file"]["name"])){
  foreach($_FILES["file"]["name"] as $key => $value){
      $filename = $_FILES["file"]["tmp_name"][$key];
      if($filename) {
      $file = fopen($filename, "rb");
      $data = fread($file,  filesize( $filename ) );
      fclose($file);
      $NameFile = $_FILES["file"]["name"][$key]; // в этой переменной надо сформировать имя файла (без всякого пути);
      $File = $data;
      $multipart .= $message;
      $multipart .=  "$EOL--$boundary$EOL";   
      $multipart .= "Content-Type: application/octet-stream; name=\"$NameFile\"$EOL";   
      $multipart .= "Content-Transfer-Encoding: base64$EOL";   
      $multipart .= "Content-Disposition: attachment; filename=\"$NameFile\"$EOL";   
      $multipart .= $EOL; // раздел между заголовками и телом прикрепленного файла 
      $multipart .= chunk_split(base64_encode($File));
      }
   

  }
}

  #>>конец вставки файлов

  $multipart .= "$EOL--$boundary--$EOL";

  $result = mail($mailTo, $subject, $multipart, $headers); // отправка письма
    return $result;

}
?>