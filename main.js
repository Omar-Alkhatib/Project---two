
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

  // let headerText = "This is you6ube";
  // const header = $("#header");
  // header.text(headerText);

  const videoListContainer = $(`#video_list_container`);
  videoListContainer.css({
    'display': 'flex',
    'flex-direction': 'column',
    // 'border-style': 'dotted',
    // 'border-color': 'blue',
    'width': '24rem',
    'padding-left': '0'
  })  
  const renderVideoList = function() {

  const ul = $(`<ul id = "video_list"></ul>`);
  ul.css({
    'margin-left': '0',
    'padding-left': '0',
    'list-style-type': 'none'
  })
  videoListContainer.append(ul);
  
  videos.forEach(function(elem, ind){

    const li = $(`<li class="video_card_container"></li>`);
    li.css({
    'display': 'flex',
    'flex-direction': 'row',
    // 'margine': '10px 10px 10px 0',
    'padding': '5px 0px 5px 0px'
    // 'border-style': 'dotted',
    // 'border-color': 'indianred',
    })
    const img = $(`<img class=image src = ${elem.thumbnail}></img>`)
    img.css({
    'margin-left': '0',
    'width': '10rem',
    'height': '6rem'
    })
    const divTitleAndChannel = $(`<div class= "title_channel_container"></div>`)
    divTitleAndChannel.css({
    'display': 'flex',
    'flex-direction': 'column',
    'padding': '0px 0px 0px 5px'
    // 'border-style': 'dotted',
    // 'border-color': 'red'
    })
    const divTitle = $(`<div class= "title"> ${elem.title} </div>`)
    divTitle.css({
    'font-weight': 'bold',
    // 'border-style': 'dotted',
    // 'border-color': 'blue',
    'flex-wrap': 'wrap',
    })
    const divChannel = $(`<div class= "channel_name"> ${elem.channel} </div>`)
    divChannel.css({
    'color': 'grey',
    // 'border-style': 'dotted',
    // 'border-color':'green'
    })

    li.append(img);
    divTitleAndChannel.append(divTitle);
    divTitleAndChannel.append(divChannel);
    li.append(divTitleAndChannel)
    ul.append(li);
    li.on("click", function(){playVideo(elem, ind, ul)})
  })

}
  
  renderVideoList();

  const screenAndTitleContainer = $("#screen_title_container");

  const playVideo = function(video, index, videoListView) {

    
    const iframe = $("#iframe");
    iframe.attr("src", `https://www.youtube.com/embed/${video.id}`)
    const videoTitle = $("#Title");
    videoTitle.css('padding', '20px 0 8px 0')
    videoTitle.text(video.title);
    // videoTitle.css("font-weight", "bold")
    videoTitle.css("font-size", "1.5rem")
    // console.log(video)
    // console.log(index)
    let obj = videos.splice(index,1)[0];
    // console.log(obj)
    videos.push(obj);
    // console.log(videos)
    videoListView.remove()
    renderVideoList();
    
    // const li = $(`<li class="video_card_container"></li>`);
    // const img = $(`<img class=image src = ${video.thumbnail}></img>`)
    // const divTitleAndChannel = $(`<div class= "title_channel_container"></div>`)
    // const divTitle = $(`<div class= "title"> ${video.title} </div>`)
    // const divChannel = $(`<div class= "channel_name"> ${video.channel} </div>`)

    // li.append(img);
    // divTitleAndChannel.append(divTitle);
    // divTitleAndChannel.append(divChannel);
    // li.append(divTitleAndChannel)
    // ul.append(li);
    // li.on("click", function(){playVideo(elem, ind, li)})
    }

    let searchInput = $("#search_input");
    let searchButton = $("#search_button");
    
 const searchFunction = function () {

  let searchString = searchInput.val();

  console.log(searchString);

    for (i = 0; i < videos.length; i++) {

    if (videos[i].title.includes(searchString, 0)) {
      console.log("broke in ")
      
      $('#video_list').remove()
      const ul = $(`<ul id = "video_list"></ul>`);
      ul.css({
        'margin-left': '0',
        'padding-left': '0',
        'list-style-type': 'none'
      })
      videoListContainer.append(ul);
    
      const li = $(`<li class="video_card_container"></li>`);
        li.css({
        'display': 'flex',
        'flex-direction': 'row',
        'padding': '5px 0px 5px 0px'
        // 'border-style': 'dotted',
        // 'border-color': 'indianred',
        })
        const img = $(`<img class=image src = ${videos[i].thumbnail}></img>`)
        img.css({
        'margin-left': '0',
        'width': '10rem',
        'height': '6rem'
        })
        const divTitleAndChannel = $(`<div class= "title_channel_container"></div>`)
        divTitleAndChannel.css({
        'display': 'flex',
        'flex-direction': 'column',
        'padding': '0px 0px 0px 5px'
        // 'border-style': 'dotted',
        // 'border-color': 'red'
        })
        const divTitle = $(`<div class= "title"> ${videos[i].title} </div>`)
        divTitle.css({
        'font-weight': 'bold',
        // 'border-style': 'dotted',
        // 'border-color': 'blue',
        'flex-wrap': 'wrap',
        })
        const divChannel = $(`<div class= "channel_name"> ${videos[i].channel} </div>`)
        divChannel.css({
        'color': 'grey',
        // 'border-style': 'dotted',
        // 'border-color':'green'
        })
    
        li.append(img);
        divTitleAndChannel.append(divTitle);
        divTitleAndChannel.append(divChannel);
        li.append(divTitleAndChannel)
        ul.append(li);
        li.on("click", function(){playVideo(videos[i], i, ul)})
        break; 
        
        }
          
  }
 };

 searchButton.on("click", searchFunction);