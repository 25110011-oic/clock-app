// 時計を更新する関数
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');

  const timeEl = document.getElementById("time");
  const newTime = `${h}:${m}`;

  // 時間が変わったときだけフェードアニメーション
  if (timeEl.innerText !== newTime) {
    timeEl.style.opacity = 0;
    setTimeout(() => {
      timeEl.innerText = newTime;
      timeEl.style.opacity = 1;
    }, 200);
  }

  // 日付と曜日
  const dateEl = document.getElementById("date");
  const week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
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
    localStorage.setItem("bgImage", reader.result); // 保存
  };

  reader.readAsDataURL(file);
};

// 起動時に背景を復元
const saved = localStorage.getItem("bgImage");
if (saved) {
  document.body.style.backgroundImage = `url(${saved})`;
}


// ===============================
// 曜日アイコンの動作
// ===============================
document.getElementById("weekdayIcon").onclick = () => {
  alert("Sun / Mon / Tue / Wed / Thu / Fri / Sat");
};
