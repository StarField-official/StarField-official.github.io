$.getJSON("php/instagram.php", function(instagram_data){

    const gallery_data = instagram_data["business_discovery"]["media"]["data"];
    let photos = "";
    const photo_length = 9;
    
    for(let i = 0; i < photo_length ;i++){
    photos += '<li class="gallery-item"><img src="' + gallery_data[i].media_url + '"><br>' + gallery_data[i].caption + ' </li>';
    }
    $("#gallery").append(photos);
    
    });
