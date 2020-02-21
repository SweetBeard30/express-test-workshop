const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        input{
            display: list-item;
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <form action="/thank-you" method="post">
        <input type="text" name="name" placeholder="name">
        <input type="number" name="age" placeholder="age">
        <input type="text" name="time" placeholder="time">
        <input type="text" name="date" placeholder="date">
        <input type="text" name="comment" placeholder="comment">
        <input type="text" name="assistant" placeholder="assistant">
        <input type="submit" value="submit">
    </form>
</body>
</html>`
module.exports = html;