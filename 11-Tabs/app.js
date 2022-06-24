const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");




about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  //if (id) //if id exist yani if i click on buttons diyorum çünkü diğer şeylerin data idsi yok
  if (id) {
    //remove active from other buttons
    btns.forEach(function (tool) {
      tool.classList.remove("active");
      e.target.classList.add("active");
    });
    //hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});