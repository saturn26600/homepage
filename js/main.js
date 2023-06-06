// js/main.js
function loadContent(page) {
  var contentDiv = document.getElementById("content")
  contentDiv.innerHTML = ""

  if (page === "home") {
    var heading = document.createElement("h2")
    heading.innerText = "What should I wear today?\n오늘 뭐 입지?"
    contentDiv.appendChild(heading)

    var video = document.createElement("video")
    video.src = "slide1.mp4"
    video.controls = true
    video.autoplay = true
    contentDiv.appendChild(video)
  } else if (page === "about") {
    var heading = document.createElement("h2")
    heading.innerText =
      "We aim for simple, trendy and minimalist outfits for a carefree day."
    contentDiv.appendChild(heading)

    var subHeading = document.createElement("p")
    subHeading.innerText =
      "고민없이 편안한 하루를 위한 심플하고 트렌디 하면서 미니멀한 코디네이트를 지향합니다."
    contentDiv.appendChild(subHeading)

    var developerInfo = document.createElement("p")
    developerInfo.innerText =
      "Developer: Art_Sun > Digital Artist\nRedbubble Shop Designer"
    contentDiv.appendChild(developerInfo)

    var image = document.createElement("img")
    image.src = "image2.png"
    image.classList.add("image")
    contentDiv.appendChild(image)
  } else if (page === "portfolio") {
    for (var i = 3; i <= 12; i++) {
      var image = document.createElement("img")
      image.src = "image" + i + ".png"
      image.classList.add("image")
      contentDiv.appendChild(image)
    }
  } else if (page === "gallery") {
    var video = document.createElement("video")
    video.src = "slide2.mp4"
    video.controls = true
    video.autoplay = true
    contentDiv.appendChild(video)
  } else if (page === "sns") {
    var link1 = document.createElement("a")
    link1.href =
      "https://www.redbubble.com/people/CheerfulKiwi/shop?utm_source=rb-native-app&utm_campaign=share-artist&utm_medium=android"
    link1.target = "_blank"
    link1.innerText = "Redbubble Shop"
    contentDiv.appendChild(link1)

    var link2 = document.createElement("a")
    link2.href = "https://instagram.com/art_______sun?igshid=ZGUzMzM3NWJiOQ=="
    link2.target = "_blank"
    link2.innerText = "Instagram"
    contentDiv.appendChild(link2)
  }
}

// 반응형 동작을 위해 윈도우 크기 변경 감지 이벤트를 추가합니다.
window.addEventListener("resize", function () {
  // 반응형 동작 로직 구현
})
