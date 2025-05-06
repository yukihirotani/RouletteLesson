let myArray = [];

async function fetchData() {
  try {
    const response = await fetch(
      "https://apex.oracle.com/pls/apex/gamelive/places/hol/"
    );
    const data = await response.json();

    myArray = data.items.map((item) => item.type_name);

    console.log(myArray); // 確認用

    const list = document.getElementById("place-list");
    list.innerHTML = "";

    myArray.forEach((placeName) => {
      const li = document.createElement("li");
      li.textContent = placeName; // placeName は文字列なのでそのまま代入
      list.appendChild(li);
    });
  } catch (error) {
    console.error("エラー:", error);
  }
}

fetchData();

function startSlot() {
  window.location.href = "index.html"; // index.html に遷移
}

function makeSlot() {
  window.location.href = "make.html"; // index.html に遷移
}
