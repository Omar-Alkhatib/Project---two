
// $(document).ready(function() {})



const videos = [
    {
      id: "7yLxxyzGiko",
      title: "Kittens walk with a tiny chicken",
      thumbnail: "https://img.youtube.com/vi/7yLxxyzGiko/maxresdefault.jpg",
    },
    {
      id: "rS6cvjFXg9s",
      title: "Cute kitten named Garfield washes its paws and prepares to sleep.",
      thumbnail: "https://img.youtube.com/vi/rS6cvjFXg9s/maxresdefault.jpg",
    },
    {
      id: "BFNekjEgvuk",
      title: "Kitten sleeps sweetly with the Chicken 🐥",
      thumbnail: "https://img.youtube.com/vi/BFNekjEgvuk/maxresdefault.jpg",
    },
    {
      id: "te1fHMaw4UY",
      title: "White kitten and white tiny bunnies 🐰 | It's so Сute! 🥰",
      thumbnail: "https://img.youtube.com/vi/te1fHMaw4UY/maxresdefault.jpg",
    },
    {
      id: "MFyUZqSknvw",
      title: "Kittens meets and walk with a cute white bunny",
      thumbnail: "https://img.youtube.com/vi/MFyUZqSknvw/maxresdefault.jpg",
    },
    {
      id: "hlajmIPiphk",
      title: "Mom Cat playing and talking to her Cute Meowing baby Kittens",
      thumbnail: "https://img.youtube.com/vi/hlajmIPiphk/maxresdefault.jpg",
    },
    {
      id: "Cz47GimSxIc",
      title: "Funny Kitten wags its tail like a Puppy",
      thumbnail: "https://img.youtube.com/vi/Cz47GimSxIc/maxresdefault.jpg",
    },
    {
      id: "RmpuhbdnAfQ",
      title: "Kitty Coco and her Sleepy younger brother 🥰",
      thumbnail: "https://img.youtube.com/vi/RmpuhbdnAfQ/maxresdefault.jpg",
    },
  ];

  let headerText = "This is you6ube";
  const header = $("#header");
  header.text(headerText);

  const ul = $("#video_list")

  videos.forEach(function(elem, ind){

    const li = $(`<li class="video_card_container"></li>`);
    const img = $(`<img class=image src = ${elem.thumbnail}></img>`)
    const divTitleAndChannel = $(`<div class= "title_channel_container"></div>`)
    const divTitle = $(`<div class= "title"> ${elem.title} </div>`)
    const divChannel = $(`<div class= "channel_name"> ${elem.channel} </div>`)

    li.append(img);
    divTitleAndChannel.append(divTitle);
    divTitleAndChannel.append(divChannel);
    li.append(divTitleAndChannel)
    ul.append(li);
    li.on("click", function(){playVideo(elem)})
  })

  const screenAndTitleContainer = $("#screen_title_container");

  const playVideo = function(video){

    
    const iframe = $("#iframe");
    iframe.attr("src", `https://www.youtube.com/embed/${video.id}`)
    const videoTitle = $("#Title");
    videoTitle.text(video.title);
    // videoTitle.css("font-weight", "bold")
    videoTitle.css("font-size", "1.5rem")

    
  }

