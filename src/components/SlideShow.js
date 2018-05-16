import React, {PureComponent} from 'react';
import './SlideShow.scss';

let slideIndex = 1;
export default class SlideShow extends PureComponent {



  plusSlides = (n) => {
    return this.showSlides(slideIndex += n);
  }

  currentSlide = (n) => {
    return this.showSlides(slideIndex = n);
  }

  showSlides = (n) => {

    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");

    if (n > slides.length) return slideIndex = 1
    console.log(slideIndex)
    console.log(slides)
    console.log("alkdj")
    if (n < 1) return slideIndex = slides.length
    console.log(slideIndex)
    console.log(slides)
    console.log("alkdj")
    for (i = 0; i < slides.length; i++) {
      return
      slides[i].style.display = "none";
      console.log("hey")
    }
    for (i = 0; i < dots.length; i++) {
      return
      console.log("kkk")
      dots[i].className = dots[i].className.replace(" active", "");
    }

    return

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

  render() {
    return (
      <div className="container">
        {this.showSlides(slideIndex)}
        <div className="mySlides">
          <div className="numbertext">1 / 6</div>
            <img src="https://imagizer.imageshack.com/v2/280x200q90/922/a6Pawe.jpg" style={{width:"100%"}} />
        </div>

        <div className="mySlides">
          <div className="numbertext">2 / 6</div>
            <img src="https://imagizer.imageshack.com/v2/280x200q90/922/wyudJ6.jpg" style={{width:"100%"}} />
        </div>

        <div className="mySlides">
          <div className="numbertext">3 / 6</div>
            <img src="https://imagizer.imageshack.com/v2/280x200q90/923/YG5bTe.jpg" style={{width:"100%"}} />
        </div>

        <div className="mySlides">
          <div className="numbertext">4 / 6</div>
            <img src="https://imagizer.imageshack.com/v2/280x200q90/922/a6Pawe.jpg" style={{width:"100%"}} />
        </div>

        <div className="mySlides">
          <div className="numbertext">5 / 6</div>
            <img src="https://imagizer.imageshack.com/v2/280x200q90/922/wyudJ6.jpg" style={{width:"100%"}} />
        </div>

        <div className="mySlides">
          <div className="numbertext">6 / 6</div>
            <img src="https://imagizer.imageshack.com/v2/280x200q90/923/YG5bTe.jpg" style={{width:"100%"}} />
        </div>

        <a className="prev" onClick={this.plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={this.plusSlides(1)}>&#10095;</a>

        <div className="caption-container">
          <p id="caption"></p>
        </div>

        <div className="row">
          <div className="column">
            <img className="demo cursor" src= "https://imagizer.imageshack.com/v2/280x200q90/922/a6Pawe.jpg"
              style={{width:"100%"}} onClick={this.currentSlide(1)} alt="mandarine" />
          </div>

          <div className="column">
            <img className="demo cursor" src= "https://imagizer.imageshack.com/v2/280x200q90/922/wyudJ6.jpg"
              style={{width:"100%"}} onClick={this.currentSlide(2)} alt="mountain" />
          </div>

          <div className="column">
            <img className="demo cursor" src= "https://imagizer.imageshack.com/v2/280x200q90/923/YG5bTe.jpg"
              style={{width:"100%"}} onClick={this.currentSlide(3)} alt="candy" />
          </div>

          <div className="column">
            <img className="demo cursor" src= "https://imagizer.imageshack.com/v2/280x200q90/922/a6Pawe.jpg"
              style={{width:"100%"}} onClick={this.currentSlide(4)} alt="mandarine1" />
          </div>

          <div className="column">
            <img className="demo cursor" src= "https://imagizer.imageshack.com/v2/280x200q90/922/wyudJ6.jpg"
              style={{width:"100%"}} onClick={this.currentSlide(5)} alt="mountain1" />
          </div>

          <div className="column">
            <img className="demo cursor" src= "https://imagizer.imageshack.com/v2/280x200q90/923/YG5bTe.jpg"
              style={{width:"100%"}} onClick={this.currentSlide(6)} alt="candy1" />
          </div>
        </div>
      </div>
    )
  }
}
