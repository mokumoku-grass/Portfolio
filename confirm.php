<?php 
  if ($_SERVER["REQUEST_METHOD"] == "POST") { 
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"]; 
  } else { 
    header("Location: contact.php"); 
  } 
?>
<html>
  <head>
    <title>お問い合わせフォーム - 確認画面</title>
  </head>
  <body>
    <h1>お問い合わせフォーム - 確認画面</h1>
    <p>以下の内容で送信します。よろしいですか？</p>
    <table>
      <tr><td>名前：</td><td><?php echo htmlspecialchars($name, ENT_QUOTES, 'UTF-8'); ?></td></tr>
      <tr><td>メールアドレス：</td><td><?php echo htmlspecialchars($email, ENT_QUOTES, 'UTF-8'); ?></td></tr>
      <tr><td>お問い合わせ内容：</td><td><?php echo htmlspecialchars($message, ENT_QUOTES, 'UTF-8'); ?></td></tr>
    </table>
    <form method="post" action="send.php">
      <input type="hidden" name="name" value="<?php echo $name; ?>">
      <input type="hidden" name="email" value="<?php echo $email; ?>">
      <input type="hidden" name="message" value="<?php echo $message; ?>">
      <input type="submit" value="送信">
      <button type="button" onclick="history.back()">戻る</button>
    </form>
  </body>
</html>
