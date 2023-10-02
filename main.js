imgArr = [
    "6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg",
    "BlottoKJ_8021.0.jpeg",
    "Cornelly_Bread_flying_saucer_pizza_Brooke_Fitts_Seattle01_ksod5p.jpg.avif"
]

for(let x=0;x<imgArr.length;x++){
    imgTag = document.createElement('img')
    imgTag.src = imgArr[x]
    imgTag.width = 400
    document.body.appendChild(imgTag)
}