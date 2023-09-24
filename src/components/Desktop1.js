import "bootstrap/dist/css/bootstrap.min.css";
import { Form, DropdownButton } from "react-bootstrap";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";
import Dropdown from "./Dropdown";
import TextField from "./TextField";
import "./Desktop1.css";

const Desktop1 = () => {
  return (
    <a className="desktop-1">
      <div className="desktop-1-child" />
      <img className="rectangle-icon" alt="" src="/rectangle@2x.png" />
      <div className="rectangle-parent">
        <div className="group-child" />
        <img className="group-item" alt="" src="/star-3.svg" />
        <img
          className="jessica-radanavong-ichpbhfd0pw-icon"
          alt=""
          src="/jessicaradanavongichpbhfd0pwunsplash@2x.png"
        />
        <div className="group-inner" />
        <img className="star-icon" alt="" src="/star-4.svg" />
        <div className="oregon-jacket">Oregon jacket</div>
        <div className="div1">$124</div>
        <div className="line-div" />
      </div>
      <img
        className="zam-nungaray-acw3b7q6ys0-unspl-icon"
        alt=""
        src="/zamnungarayacw3b7q6ys0unsplash@2x.png"
      />
      <img
        className="philipp-arlt-nmh9a0obon8-unspl-icon"
        alt=""
        src="/philipparltnmh9a0obon8unsplash@2x.png"
      />
      <img
        className="philipp-arlt-8eyb-rvawty-unspl-icon"
        alt=""
        src="/philipparlt8eyb-rvawtyunsplash@2x.png"
      />
      <div className="lorem-ipsum-dolor">Fresh</div>
      <div className="lorem-ipsum-dolor1">New products</div>
      <div className="lorem-ipsum-dolor2">Look</div>
      <div className="lorem-ipsum-dolor3">2022</div>
      <div className="apparel">Apparel</div>
      <div className="accessories">Accessories</div>
      <div className="best-sellers">Best sellers</div>
      <div className="off">50% off</div>
      <header className="desktop-1-item" />
      <footer className="desktop-1-inner" />
      <img className="icon" alt="" src="/18591063@2x.png" />
      <div className="home">HOME</div>
      <div className="about">ABOUT</div>
      <div className="copyright-2022-all">
        Copyright 2022 All Right Reserved By SG
      </div>
      <div className="contact-us">CONTACT US</div>
      <div className="bag-0">BAG (0)</div>
      <div className="wishlist-0">WISHLIST (0)</div>
      <div className="shopkart">ShopKart</div>
      <div className="free-delivery">Free Delivery</div>
      <div className="return-policy">Return Policy</div>
      <div className="login">Login</div>
      <div className="follow-us">Follow US</div>
      <img className="layer-156-icon" alt="truck" src="/layer-156.svg" />
      <img className="vector-icon2" alt="" src="/vector2.svg" />
      <img className="vector-icon3" alt="" src="/vector3.svg" />
      <img className="vector-icon4" alt="" src="/vector4.svg" />
      <img className="group-icon" alt="" src="/group-6.svg" />
      <div className="desktop-1-child1" />
      <img className="desktop-1-child2" alt="" src="/group-16.svg" />
      <img className="desktop-1-child3" alt="" src="/group-17.svg" />
      <div className="get-news-about-container">
        <p className="blank-line">&nbsp;</p>
        <p className="blank-line">
          Get news about articles and updates in your inbox.
        </p>
      </div>
      <div className="newslleter">Newslleter</div>
      <Form className="name">
        <Form.Label>NAME</Form.Label>
        <Form.Control type="text" placeholder="Input placeholder" />
      </Form>
      <Form className="email">
        <Form.Label>EMAIL</Form.Label>
        <Form.Control type="text" placeholder="Input placeholder" />
      </Form>
      <Form className="message">
        <Form.Label>MESSAGE</Form.Label>
        <Form.Control type="text" placeholder="Input placeholder" />
      </Form>
      <img className="arrow-icon" alt="" src="/arrow-1.svg" />
      <img className="desktop-1-child4" alt="" src="/arrow-2.svg" />
      <div className="lorem-ipsum-dolor-container">
        <p className="blank-line">{`GET `}</p>
        <p className="blank-line">IN TOUCH</p>
      </div>
      <div className="desktop-1-child5" />
      <div className="desktop-1-child6" />
      <div className="desktop-1-child7" />
      <div className="button">
        <div className="button-child" />
        <div className="send">SEND</div>
      </div>
      <SecondaryButton
        secondaryButtonPosition="absolute"
        secondaryButtonTop="1275px"
        secondaryButtonLeft="611px"
      />
      <SecondaryButton
        secondaryButtonPosition="absolute"
        secondaryButtonTop="1275px"
        secondaryButtonLeft="941px"
      />
      <SecondaryButton
        secondaryButtonPosition="absolute"
        secondaryButtonTop="1275px"
        secondaryButtonLeft="1272px"
      />
      <img
        className="malicki-m-beser-pkmvkg7vnuo-un-icon"
        alt=""
        src="/malickimbeserpkmvkg7vnuounsplash@2x.png"
      />
      <SecondaryButton
        secondaryButtonPosition="absolute"
        secondaryButtonTop="1275px"
        secondaryButtonLeft="1272px"
      />
      <PrimaryButton
        primaryButtonPosition="absolute"
        primaryButtonTop="696px"
        primaryButtonLeft="115px"
        primaryButtonBorder="1px solid var(--grey-scale-000)"
        primaryButtonBoxSizing="border-box"
      />
      <Dropdown
        dropdownDisplay="flex"
        dropdownFlexDirection="column"
        dropdownPosition="absolute"
        dropdownTop="115px"
        dropdownLeft="490px"
      />
      <TextField
        textFieldPosition="absolute"
        textFieldTop="1332px"
        textFieldLeft="346px"
      />
      <TextField
        textFieldPosition="absolute"
        textFieldTop="1332px"
        textFieldLeft="682px"
      />
      <TextField
        textFieldPosition="absolute"
        textFieldTop="1332px"
        textFieldLeft="1012px"
      />
      <TextField
        textFieldPosition="absolute"
        textFieldTop="1332px"
        textFieldLeft="1343px"
      />
    </a>
  );
};

export default Desktop1;
