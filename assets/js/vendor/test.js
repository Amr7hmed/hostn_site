const popupeclose9 = document.querySelector(".popupe-close_9"),
popupe_9 = document.querySelector(".popupe_9");
viewpopupe_9 = document.querySelector(".viewpopupe_9");


viewpopupe_9.addEventListener("click",function(){
  popupe_9.style.display = "block";
  popupe_9.setAttribute("id",`Poupe_${item.id}`)
  })
  
  popupeclose9.addEventListener("click",function(){
    popupe_9.style.display = "none";
})



<div class="img-item img-9">
<div class="overload"></div>
<img src="../../image/bg/header.png" alt="" class="cover">
<div class="review">
  <span>
    <img src="../../image/icons/star.svg" alt="">
    (9990 review)
  </span>
  <span>
    9.9
  </span>
  <button class="btn">
    Villa
  </button>
</div>
<div class="like">
  <img src="../../image/icons/like.svg" alt="">
</div>

<div class="bottom">
  <span class="cost">
    EGP 990
    <span>
      /night
    </span>
  </span>

</div>
<div class="location">
  <img src="../../image/icons/Iconmaterial-location-on.svg" alt="">
  Hurghada
</div>

<div class="detiles ">
  <button class="btn viewpopupe_9" id="9">
    Quick View
  </button>

  <span>
    All Details
  </span>
</div>


<div class="popupe popupe_9">
  <span class="popupe-close popupe-close_9">
    <img src="../../image/icons/Icon-material-close.svg" alt="">
  </span>

  <div class="popupe__properties">
    <div class="left">
      <div class="img-cover">
        <img src="../../image/bg/toprated-one.png" alt="">
      </div>

      <div class="img-carousel">
        <div class="owl-carousel owl-theme">
          <div class="item">
            <img src="../../image/bg/toprated-one.png" alt="">
          </div>
          <div class="item">
            <img src="../../image/bg/toprated-one.png" alt="">
          </div>
          <div class="item">
            <img src="../../image/bg/toprated-one.png" alt="">
          </div>
          <div class="item">
            <img src="../../image/bg/toprated-one.png" alt="">
          </div>
          <div class="item">
            <img src="../../image/bg/toprated-one.png" alt="">
          </div>
          <div class="item">
            <img src="../../image/bg/toprated-one.png" alt="">
          </div>
          <div class="item">
            <img src="../../image/bg/toprated-one.png" alt="">
          </div>
          <div class="item">
            <img src="../../image/bg/toprated-one.png" alt="">
          </div>
          <div class="item">
            <img src="../../image/bg/toprated-one.png" alt="">
          </div>
          <div class="item">
            <img src="../../image/bg/toprated-one.png" alt="">
          </div>
          <div class="item">
            <img src="../../image/bg/toprated-one.png" alt="">
          </div>
          <div class="item">
            <img src="../../image/bg/toprated-one.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="top">
        <span class="heart">
          <button class="btn img">
            <img src="../../image/icons/Icon-heart.svg" alt="">
          </button>
          <span class="text">
            Save
          </span>
        </span>


        <span class="share">
          <button class="btn img">
            <img src="../../image/icons/icon-share-poup.svg" alt="">
          </button>
          <span class="text">
            Share
          </span>
        </span>


      </div>

      <div class="content">
        <h9>Lorem Ipsum</h9>
        <div class="loction">
          <img src="../../image/icons/location.svg" alt="">
          <span>
            New Cairo, Cairo, Egypt
          </span>
        </div>

        <div class="price">
          <span>EGP 9,990</span><span>/ avg night</span>
        </div>

        <div class="reviewpoupe">
          <div class="stars">
            <img src="../../image/icons/star.svg" alt="">
            <img src="../../image/icons/star.svg" alt="">
            <img src="../../image/icons/star.svg" alt="">
            <img src="../../image/icons/star.svg" alt="">
            <img src="../../image/icons/star.svg" alt="">
          </div>
          <div class="text">
            9990 review
          </div>
        </div>

      </div>


      <div class="icons">
        <div class="one">

          <div class="icon">
            <span class="img">
              <img src="../../image/icons/icon-villa.svg" alt="">
            </span>
            <span class="text">
              VILLA
            </span>
          </div>
          <div class="icon">
            <span class="img">
              <img src="../../image/icons/icon-room.svg" alt="">
            </span>
            <span class="text">
              9 ROOMS
            </span>
          </div>
        </div>
        <div class="two">

          <div class="icon">
            <span class="img">
              <img src="../../image/icons/icon-bathroom.svg" alt="">
            </span>
            <span class="text">
              9 BATHROOMS
            </span>
          </div>
          <div class="icon">
            <span class="img">
              <img src="../../image/icons/icon-bed.svg" alt="">
            </span>
            <span class="text">
              9 BEDS
            </span>
          </div>
        </div>
        <div class="icon">
          <span class="img">
            <img src="../../image/icons/icon-metar.svg" alt="">
          </span>
          <span class="text">
            190M
          </span>
        </div>
      </div>
      <div class="buttons">
        <button class="btn">
          Book Now
        </button>
        <button class="btn">
          All Details
        </button>
      </div>

    </div>
  </div>
</div>
</div>