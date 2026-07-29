const root = document.documentElement;
const toggle = document.getElementById("language-toggle");

function setLanguage(language) {
  root.dataset.language = language;
  root.lang = language === "zh" ? "zh-CN" : "en";
  document.title = language === "zh" ? "Chaohui Zhou | 周朝辉" : "Chaohui Zhou";
  localStorage.setItem("chaohuizhou-language", language);
}

setLanguage(localStorage.getItem("chaohuizhou-language") || "zh");
toggle.addEventListener("click", () => setLanguage(root.dataset.language === "zh" ? "en" : "zh"));
document.getElementById("year").textContent = new Date().getFullYear();
