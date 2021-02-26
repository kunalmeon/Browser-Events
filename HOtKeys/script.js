let pressedKeyCode;
function hotKeys(func, ...eventcode) {
  pressedKeyCode = new Set();
  document.addEventListener("keydown", function () {
    pressedKeyCode.add(event.code);
    for (let checkAllCode of eventcode) {
      if (!pressedKeyCode.has(checkAllCode)) return;
    }
    
    func();//callin function which alerts message but the keys are not released yet
    //javascript will assume that the key are pressed and we will get o/p even pressing second button only
    //so we need to reset all so that user have to press all key together
    pressedKeyCode.clear();
  });
}
document.addEventListener("keyup", function () {
  pressedKeyCode.delete(event.code);
});

hotKeys(
  () => alert("kunal neon"),

  "KeyK",

  "KeyN"
);
hotKeys(
  () => alert("PlayerUnknownBattleGround"),

  "KeyP",

  "KeyU",

  "KeyB",

  "KeyG"
);
hotKeys(
  () => alert("I love yoou"),

  "KeyI",

  "KeyL",
  "KeyU"
);
