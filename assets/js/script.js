

// import Plyr from 'plyr';
//
// const player = new Plyr('#player');
// response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");

// Switch out pictures
let kindle = document.getElementById("kindle_emoji");


function hide() {
  description_list = document.getElementsByClassName("description");
  video_list = document.getElementsByClassName("video");

  document.getElementById("pickteam").style.display = "none";
  document.getElementById("arrow").style.display = "none";

  for (let i = 0; i < description_list.length; i++) {
    description_list[i].style.display = "none";
    video_list[i].style.display = "none";
  }
}



kindle.onclick = function() {
  hide();
  document.getElementById("kindle_d").style.display = "block";
  document.getElementById("kindle_v").style.display = "block";

}

let apoc = document.getElementById("apoc_emoji");
apoc.onclick = function() {
  hide();
  document.getElementById("apoc_d").style.display = "block";
  document.getElementById("apoc_v").style.display = "block";

}

let dt = document.getElementById("dt_emoji");
dt.onclick = function() {
  hide();
  document.getElementById("dt_d").style.display = "block";
  document.getElementById("dt_v").style.display = "block";

}

let yarang = document.getElementById("yarang_emoji");
yarang.onclick = function() {
  hide();
  document.getElementById("yarang_d").style.display = "block";
  document.getElementById("yarang_v").style.display = "block";

}

let juicebox = document.getElementById("juicebox_emoji");
juicebox.onclick = function() {
  hide();
  document.getElementById("juicebox_d").style.display = "block";
  document.getElementById("juicebox_v").style.display = "block";

}

let eta = document.getElementById("eta_emoji");
eta.onclick = function() {
  hide();
  document.getElementById("eta_d").style.display = "block";
  document.getElementById("eta_v").style.display = "block";

}

let eggs = document.getElementById("eggs_emoji");
eggs.onclick = function() {
  hide();
  document.getElementById("eggs_d").style.display = "block";
  document.getElementById("eggs_v").style.display = "block";

}

let irrelevant = document.getElementById("irrelevant_emoji");
irrelevant.onclick = function() {
  hide();
  document.getElementById("irrelevant_d").style.display = "block";
  document.getElementById("irrelevant_v").style.display = "block";

}

let relevant = document.getElementById("relevant_emoji");
relevant.onclick = function() {
  hide();
  document.getElementById("relevant_d").style.display = "block";
  document.getElementById("relevant_v").style.display = "block";

}

let tato = document.getElementById("tato_emoji");
tato.onclick = function() {
  hide();
  document.getElementById("tato_d").style.display = "block";
  document.getElementById("tato_v").style.display = "block";

}
