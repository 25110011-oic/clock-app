// 時計を更新する関数
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');

  const hEl = document.getElementById("h");
  const mEl = document.getElementById("m");
  const sEl = document.getElementById("s");

  // digit クラスを付ける（初回のみ）
  [hEl, mEl, sEl].forEach(el => {
    if (!el.classList.contains("digit")) {
      el.classList.add("digit");
    }
  });

  // 時
  if (hEl.innerText !== h) {
    hEl.classList.add("fade");
    setTimeout(() => {
      hEl.innerText = h;
      hEl.classList.remove("fade");
    }, 120);
  }

  // 分
  if (mEl.innerText !== m) {
    mEl.classList.add("fade");
    setTimeout(() => {
      mEl.innerText = m;
      mEl.classList.remove("fade");
    }, 120);
  }

  // 秒
  if (sEl.innerText !== s) {
    sEl.classList.add("fade");
    setTimeout(() => {
      sEl.innerText = s;
      sEl.classList.remove("fade");
    }, 120);
  }

  // 日付と曜日
  const dateEl = document.getElementById("date");
  const week = ["日","月","火","水","木","金","土"];
  const w = week[now.getDay()];
  dateEl.innerText =
    `${now.getFullYear()}.${now.getMonth()+1}.${now.getDate()} (${w})`;
}

// 1秒ごとに時計更新
setInterval(updateClock, 1000);
updateClock();


// ===============================
// 背景画像を端末から選ぶ処理
// ===============================
document.getElementById("settingsIcon").onclick = () => {
  document.getElementById("bgPicker").click();
};

document.getElementById("bgPicker").onchange = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    document.body.style.backgroundImage = `url(${reader.result})`;
    localStorage.setItem("bgImage", reader.result);
  };

  reader.readAsDataURL(file);
};

// 起動時に背景を復元
const saved = localStorage.getItem("bgImage");
if (saved) {
  document.body.style.backgroundImage = `url(${saved})`;
}
