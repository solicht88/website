/* ignore this--experimental stuff that may be updated later

let photos = ["../images/cool_pink_friend.jpeg", "../images/solicht_icon_high_res.png", "../images/sunset.png",  "../images/under_water.png"];

function displayGallery(name, gallery) {
    let current = document.getElementsByName(name);
    for (let i = 0; i < gallery.length; i++) {
        const imageLink = document.createElement("a");
        const image = document.createElement("img");
        imageLink.href = gallery[i];
        imageLink.appendChild(image)
        current.appendChild(imageLink);
    }
}

html script that doesn't work yet
<script>
    let photos = ["../images/cool_pink_friend.jpeg", "../images/solicht_icon_high_res.png", "../images/sunset.png",  "../images/under_water.png"];
    let current = document.getElementsById(photos);
    for (let i = 0; i < photos.length; i++) {
        const imageLink = document.createElement("a");
        const image = document.createElement("img");
        imageLink.href = photos[i];
        image.src = photos[i];
        imageLink.appendChild(image);
        current.appendChild(imageLink);
    }
</script>
*/