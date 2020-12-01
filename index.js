
let tags = ['html', 'javascript', 'css', 'json', 'css', 'xml', 'css', 'html', 'json'];
document.getElementById("first").innerHTML = tags;
let upperTags = tags.map((name)=>{return name.toUpperCase()});
document.getElementById("second").innerHTML = upperTags;
let arr = upperTags.filter((tag)=>tag!=='XML'&&tag!='JSON');
document.getElementById("third").innerHTML = arr;
let countArr = arr.reduce( (arr1, index) => {
    arr1[index] = (arr1[index] || 0) + 1 ;
    return arr1;
  } , {})
  let val = Object.values(countArr);
  let key = Object.keys(countArr);
  let print= "";
  for(let i=0;i<val.length;i++){
    print+=(key[i]+" : "+val[i]+" ");
  }
  document.getElementById("fourth").innerHTML = print;


  
