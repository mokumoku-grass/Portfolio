<html>
  <head>
    <title>お問い合わせフォーム</title>
  </head>
  <body>
    <h1>お問い合わせフォーム</h1>
    <form method="post" action="confirm.php">
      <label for="name">名前:</label><br>
      <input type="text" id="name" name="name"><br>
      <label for="email">メールアドレス:</label><br>
      <input type="email" id="email" name="email"><br>
      <label for="message">お問い合わせ内容:</label><br>
      <textarea id="message" name="message"></textarea><br><br>
      <input type="submit" value="送信">
      <input type="button" onclick="location.href = 'index.html'" value="戻る">
    </form>
  </body>
</html>