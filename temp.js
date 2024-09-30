function convert(){
    var current=document.getElementById('from').value;
    var to=document.getElementById('to').value;
    var temp=parseFloat(document.getElementById('input').value);

    var result;
    var unit={
        C:'°C',
        F:'°F',
        K:'°K',
        R:'°R'
    };

    switch(current){
        case 'C':
            if(to === 'F')
            result=(temp* (9/5))+32;
            else if(to === 'K')
            result=temp+273.5;
           else if(to==='R')
          result= (temp+273.15)*(9/5); 
        else 
        result=temp;
         break;
         case 'F':
            if(to ==='C')
            result=(5/9)*(temp-32);
          else if(to ==='K')
            result= (5/9)*(temp-32)+273.5;
        else if(to==='R')
         result=temp+459.67;
        else
        result=temp;
        break;
        case 'K':
            if(to==='C')
            result=temp-273.5;
         else if(to==='F')
           result= (temp-273.15)*(9/5)+32;
        else if(to==='R')
          result=temp*(9/5);
        else
        result=temp;
        break;
        case 'R':
            if(to==='C')
                result=(5/9)*(temp-491.67);
            else if(to ==='F')
                result=temp-459.61;
            else if(to==='K')
            result=(5/9)*temp;
        else
        result=temp;
        break;
        default:
            result="invalid";

    }
    document.getElementById('result').value=result.toFixed(2)+' '+unit[to];
}
var randomChange=document.getElementById('randomChange'),wp=[
    "https://c4.wallpaperflare.com/wallpaper/943/824/870/moss-stone-beach-sun-rises-grey-stone-wallpaper-preview.jpg",
    "https://images.unsplash.com/photo-1669975377174-2bfa7c4d66b0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0b25lJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D",
    "https://png.pngtree.com/thumb_back/fw800/background/20240604/pngtree-cobble-stone-beach-of-red-sea-on-sunset-image_15739439.jpg",
    "https://img.freepik.com/free-photo/beautiful-natural-view-landscape_23-2150787996.jpg",
    "https://4kwallpapers.com/images/walls/thumbs_2t/14811.jpg",
    "https://t3.ftcdn.net/jpg/08/39/53/06/360_F_839530605_M5dWbxyGucm9uGpNxn3wjtFZmF3XJzoh.jpg",
    "https://6amcity.brightspotcdn.com/dims4/default/61e0e1d/2147483647/strip/true/crop/2160x1216+0+224/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk1-prod-sixam-city.s3.us-east-2.amazonaws.com%2Fbrightspot%2Ff7%2F7f%2Ffbf0ae964e0d901e122b9209586c%2F428058636-412286701199078-3193163520080640965-n.jpg",
    "https://www.shutterstock.com/image-photo/bioluminescent-blue-light-glows-on-600nw-2504243649.jpg"
];
var n=Math.floor(Math.random()*8);
window.onload=function(){
randomChange.style.backgroundImage = 'url('+wp[n]+')';
}   