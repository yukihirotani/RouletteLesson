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

function backSlot() {
  window.location.href = "list.html"; // index.html に遷移
}

async function makeSlot() {
  const typeName = document.getElementById("place-make").value;

  const response = await fetch(
    "https://apex.oracle.com/pls/apex/gamelive/placelist.crea/hol/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type_name: typeName }),
    }
  );
  window.location.reload();
}
