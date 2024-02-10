const feedback = document.getElementById("feedback")
const choiceContainer = document.getElementById("choice-container")
const choices = [
  {
    text: "ゴリアテ",
    feedback:
      "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
  },
  {
    text: "ゼニガメ",
    feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
  },
  {
    text: "ガニメデ",
    feedback: "正解！ガニメデは、木星の第三惑星だよ！",
  },
  { text: "スネアテ", feedback: "不正解！スネアテは、足につける防具だよ！" },
]
for (let i = 0; choices.length > i; i++) {
  const buttons = document.createElement("button")
  buttons.textContent = choices[i].text
  buttons.onclick = function () {
    feedback.textContent = choices[i].feedback
  }
  choiceContainer.append(buttons)
}
