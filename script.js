const apiKeyInput = document.getElementById("apiKey")
const gameSelect = document.getElementById("gameSelect")
const questionInput = document.getElementById("questionInput")
const askButton = document.getElementById("askButton")
const aiResponse = document.getElementById("aiResponse")
const form = document.getElementById("form")

const markdownToHTML = (text) => {
  const converter = new showdown.Converter()
  return converter.makeHtml(text)
}

