var images=[];
var index=0;
images[0]='images/image1.jpg';
images[1]='images/image2.jpg';
images[2]='images/image3.jpg';
images[3]='images/image4.jpg';
images[4]='images/image5.jpg';
images[5]='images/image6.jpg';
images[6]='images/image7.jpg';
images[7]='images/image8.jpg';
images[8]='images/image9.jpg';
function slideshow(){
        if(index < images.length){
        document.imageshow.src=images[index];
        index++;
        }
        else{

            index=0;
        }
        setTimeout("slideshow()",2000);
    }
    window.onload=slideshow;
