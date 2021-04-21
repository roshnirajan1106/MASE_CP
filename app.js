var arr1 = [],
  arr2 = [],
  arr3 = [],
  arr4 = [],
  arr5 = [],
  arr6 = [];

document.getElementsByClassName(`box1`)[0].addEventListener("click", function() {
if(arr1.length !==0)
{
  arr1=[];
}
  for (var i = 0; i < 5; i++) {
    var x = document.getElementsByClassName('input')[i];
    arr1.push(x.value);
  }

  document.getElementsByClassName('btn')[0].addEventListener('click', function() {
    console.log(arr1);
    document.getElementsByClassName(`in`)[0].reset();
  });
});
document.getElementsByClassName(`box2`)[0].addEventListener("click", function() {
  if(arr2.length !==0)
  {
    arr2=[];
  }
  for (var i = 0; i < 5; i++) {
    var x = document.getElementsByClassName('input')[i];
    arr2.push(x.value);
  }
  document.getElementsByClassName('btn')[0].addEventListener('click', function() {
    console.log(arr2);
    document.getElementsByClassName(`in`)[0].reset();
  })
});
document.getElementsByClassName(`box3`)[0].addEventListener("click", function() {
  if(arr3.length !==0)
  {
    arr3=[];
  }
  for (var i = 0; i < 5; i++) {
    var x = document.getElementsByClassName('input')[i];
    arr3.push(x.value);
  }
  document.getElementsByClassName('btn')[0].addEventListener('click', function() {
    console.log(arr3);
    document.getElementsByClassName(`in`)[0].reset();
  })
});


document.getElementsByClassName(`box4`)[0].addEventListener("click", function() {
  if(arr4.length !==0)
  {
    arr4=[];
  }
  for (var i = 0; i < 5; i++) {
    var x = document.getElementsByClassName('input')[i];
    arr4.push(x.value);
  }
  document.getElementsByClassName('btn')[0].addEventListener('click', function() {
    console.log(arr4);
    document.getElementsByClassName(`in`)[0].reset();
  })
});
document.getElementsByClassName(`box5`)[0].addEventListener("click", function() {
  if(arr5.length !==0)
  {
    arr5=[];
  }
  for (var i = 0; i < 5; i++) {
    var x = document.getElementsByClassName('input')[i];
    arr5.push(x.value);
  }
  document.getElementsByClassName('btn')[0].addEventListener('click', function() {
    console.log(arr5);
    document.getElementsByClassName(`in`)[0].reset();
  })
});


document.getElementsByClassName(`box6`)[0].addEventListener("click", function() {

  for (var i = 0; i < 5; i++) {
    if(arr6.length !==0)
    {
      arr6=[];
    }
    var x = document.getElementsByClassName('input')[i];
    arr6.push(x.value);
  }
  document.getElementsByClassName('btn')[0].addEventListener('click', function() {
    console.log(arr6);
    document.getElementsByClassName(`in`)[0].reset();
  })

});




for(var i=0;i<5;i++)
console.log("ji"+arr1[i]);
