<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>花畑</title>

<style>
body{
    margin:0;
}

/* 全体の箱 */
.hero{
    position:relative;
    width:960px;
    height:540px;
}

/* 背景画像 */
.bg{
    width:960px;
    height:540px;
}

/* 文章 */
.message{
    position:absolute;
    top:40px;
    left:30px;
    background:rgba(255,255,255,0.6);
    padding:15px;
}

.message p{
    color:#d12b6a;
    font-size:22px;
    font-weight:bold;
}

/* 蝶 */
.butterfly{
    position:absolute;
    width:70px;
}

.b1{
    left:150px;
    top:380px;
}

.b2{
    left:400px;
    top:330px;
}

.b3{
    left:620px;
    top:400px;
}

/* 右下文字 */
.credit{
    position:absolute;
    right:20px;
    bottom:15px;
    color:white;
}
</style>

</head>

<body>

<div class="hero">

    <img src="bg0.png" class="bg" alt="背景">

    <div class="message">
        <p>
        ぽかぽか陽気の穏やかな朝<br>
        花畑では、蝶々がのんびり飛んでいます
        </p>
    </div>

    <img src="butterfly.gif" class="butterfly b1">
    <img src="butterfly.gif" class="butterfly b2">
    <img src="butterfly.gif" class="butterfly b3">
    </div>

</div>

</body>
</html>
