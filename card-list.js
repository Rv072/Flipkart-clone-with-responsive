 var _listdata = [
    {
      id: 1,
      title: "Top Offers",
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
    },
    {
      id: 2,
      title: "Grocery",
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
    },
    {
      id: 3,
      title: "Mobiles",
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
    },
    {
      id: 4,
      title: "Fashion",
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",
      icon: "arrow1.png",
    },
    {
      id: 5,
      title: "Electronics",
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
      icon: "arrow1.png",
    },
    {
      id: 6,
      title: "Home",
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
      icon: "arrow1.png",
    },
    {
      id: 7,
      title: "Appliances",
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
      icon: "arrow1.png",
    },
    {
      id: 8,
      title: "Travel",
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
    },
    {
      id: 9,
      title: "Beauty,Toys & More",
      image:
        "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
      icon: "arrow1.png",
    },
  ];

  const listiteams = document.getElementById("container");

  function createElements(content) {
    const listdata = document.createElement("div");
    listdata.innerHTML = `<div class="parent">
    <a class=anchorlist href="catogery.html">
        <img class="img" src=${content.image}>
        <div class="child">
        <p>${content.title}</p>
         <img class="imgicon" src=${content.icon} ">
         </div></a>
        </div>`;

    return listdata;
  }

  for (var i = 0; i < _listdata.length; i++) {
    dataiteam = _listdata[i];
    const currentdata = createElements(dataiteam);
    listiteams.appendChild(currentdata);
  }