// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
b = document.querySelector('button#submit');
b.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  kaisu = kaisu + 1;
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let input = document.querySelector('input#guess');
  let yoso = Number(input.value);
  c = document.querySelector('span#kaisu');
  d = document.querySelector('span#answer');
  e = document.querySelector('#result');
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  console.log(kaisu + "回目の予想: " + yoso);
  c.textContent = kaisu;
  d.textContent = yoso;
  if (kaisu > 3) {
    e.textContent = "答えは " + kotae + " でした。ゲームはすでに終了しています。";
    return;
  }
  if (yoso === kotae) {
    e.textContent = "正解です！";
  } else if (kaisu === 3) {
    if (yoso < kotae) {
      e.textContent = "まちがい。答えは " + kotae + " でした。";
    } else {
      e.textContent = "まちがい。答えは " + kotae + " でした。";
    }
  } else {
    if (yoso === kotae) {
      console.log("正解です！");
      e.textContent = '正解です！';
    } else if (yoso < kotae) {
      console.log("まちがい。答えはもっと大きいですよ");
      e.textContent = 'まちがい。答えはもっと大きいですよ';
    } else {
      console.log("まちがい。答えはもっと小さいですよ");
      e.textContent = 'まちがい。答えはもっと小さいですよ';
    }
  }
}