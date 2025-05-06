let places = [];
let currentIndex = 0;
let spinning = false;
let spinTimeout = null;
let currentSpeed = 100;

//APIよりデータを取得する
async function fetchData() {
  try {
    const response = await fetch(
      "https://apex.oracle.com/pls/apex/gamelive/places/hol/"
    );
    const data = await response.json();
    places = data.items.map((item) => item.type_name);
    console.log(places);
  } catch (error) {
    console.error("エラー:", error);
  }
}

fetchData();

// スロットを回す
function spin() {
  document.getElementById("slot").textContent = places[currentIndex];
  currentIndex = (currentIndex + 1) % places.length;

  spinTimeout = setTimeout(spin, currentSpeed);
}

// スタートボタンが押されたとき
function startSlot() {
  if (spinning) return;

  spinning = true;
  currentSpeed = 100;
  spin();
}

// ストップボタンが押されたとき
function stopSlot() {
  if (!spinning) return;

  let slowdownInterval = setInterval(() => {
    currentSpeed += 100;

    if (currentSpeed >= 800) {
      clearInterval(slowdownInterval);
      clearTimeout(spinTimeout);
      spinning = false;
    }
  }, 300);
}
