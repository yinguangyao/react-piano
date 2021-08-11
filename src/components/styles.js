import styled from "styled-components";

export const HeaderStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  .container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }

  .text-white {
    color: #fff !important;
  }

  .text-sm-center {
    text-align: center !important;
  }

  .mt-4,
  .my-4 {
    margin-top: 1.5rem !important;
  }

  .pb-5,
  .py-5 {
    padding-bottom: 3rem !important;
  }

  .pt-5,
  .py-5 {
    padding-top: 3rem !important;
  }

  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  .btn-group-lg > .btn,
  .btn-lg {
    padding: 5px 10px;
    font-size: 12px;
    line-height: 15px;
    border-radius: 3px;
  }

  .btn-outline-light {
    color: #f8f9fa;
    background-color: transparent;
    background-image: none;
    border-color: #f8f9fa;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    padding: 15px 7.5px;
    font-size: 15px;
    line-height: 15px;
    border: 1px solid #fff;
    border-radius: 5px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  a {
    margin: 0 10px;
    text-decoration: none;
  }

  .text-center {
    margin-top: 12px;
    text-align: center !important;
  }

  p {
    margin: 0 10px;
  }
`;

export const FooterStyle = styled.div`
  hr {
    margin: 0 50px;
    border: 0;
    border-top-color: currentcolor;
    border-top-style: none;
    border-top-width: 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  .bg-yellow {
    background-color: #f8e8d5;
  }
  .container {
    line-height: 50px;
    height: 50px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }
  .text-secondary {
    color: #6c757d !important;
  }
  .text-center {
    text-align: center !important;
  }
  .code {
    padding: 0 250px;
  }
  @media screen and (max-width: 1000px) {
    .code {
      padding: 0 20px;
    }
  }
  code {
    overflow: hidden;
    background-color: #ececec;
    width: 100%;
    display: block;
    padding: 10px 0;
  }
`;

export const PianoStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  .icon {
    width: 24px;
  }

  .piano {
    margin: 0 200px;
    background: linear-gradient(-65deg, #000, #222, #000, #666, #222 75%);
    border-top: 0.8rem solid #282828;
    -webkit-box-shadow: inset 0 -1px 1px hsla(0, 0%, 100%, 0.5),
      inset -0.4rem 0.4rem #282828;
    box-shadow: inset 0 -1px 1px hsla(0, 0%, 100%, 0.5),
      inset -0.4rem 0.4rem #282828;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 80vh;
    height: 20vh;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    overflow: hidden;
    padding-bottom: 2%;
    padding-left: 2.5%;
    padding-right: 2.5%;
  }

  @media screen and (max-width: 1000px) {
    /*当屏幕尺寸小于600px时，应用下面的CSS样式*/
    .piano {
      margin: 0 10px;
    }
  }

  .piano-key {
    color: blue;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: 0 0.1rem;
    max-width: 8.8rem;
    position: relative;
  }

  .piano-key__white {
    display: flex;
    flex-direction: column-reverse;
    background: linear-gradient(-30deg, #f8f8f8, #fff);
    -webkit-box-shadow: inset 0 1px 0 #fff, inset 0 -1px 0 #fff,
      inset 1px 0 0 #fff, inset -1px 0 0 #fff, 0 4px 3px rgba(0, 0, 0, 0.7),
      inset 0 -1px 0 #fff, inset 1px 0 0 #fff,
      inset -1px -1px 15px rgba(0, 0, 0, 0.5), -3px 4px 6px rgba(0, 0, 0, 0.5);
    box-shadow: inset 0 1px 0 #fff, inset 0 -1px 0 #fff, inset 1px 0 0 #fff,
      inset -1px 0 0 #fff, 0 4px 3px rgba(0, 0, 0, 0.7), inset 0 -1px 0 #fff,
      inset 1px 0 0 #fff, inset -1px -1px 15px rgba(0, 0, 0, 0.5),
      -3px 4px 6px rgba(0, 0, 0, 0.5);
    height: 100%;
    position: relative;
  }

  .piano-key__black {
    display: flex;
    flex-direction: column-reverse;
    background: linear-gradient(-20deg, #222, #000, #222);
    -webkit-box-shadow: inset 0 -1px 2px hsla(0, 0%, 100%, 0.4),
      0 2px 3px rgba(0, 0, 0, 0.4);
    box-shadow: inset 0 -1px 2px hsla(0, 0%, 100%, 0.4),
      0 2px 3px rgba(0, 0, 0, 0.4);
    border-width: 0.2rem 0.4rem 1.2rem;
    border-style: solid;
    border-color: #666 #222 #111 #555;
    height: 60%;
    left: 100%;
    position: absolute;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    top: 0;
    width: 70%;
    z-index: 1;
  }

  .piano-note {
    color: #000;
    /* 隐藏音符显示 */
    /* font-size: 8px; */
    font-size: 0px;
    text-align: center;
    height: 20px;
  }

  a {
    text-decoration: none;
  }

  .text-center {
    margin: 15px;
    text-align: center !important;
  }

  /* .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  } */

  .btn-outline-info {
    color: #17a2b8;
    background-color: transparent;
    background-image: none;
    border-color: #17a2b8;
  }

  .btn {
    text-transform: none;
    margin: 15px;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    /* white-space: nowrap; */
    vertical-align: middle;
    /* -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; */
    border: 1px solid #17a2b8;
    padding: 8px 8px;
    font-size: 16px;
    line-height: 16px;
    border-radius: 2.5px;
    /* transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out; */
  }

  .btn-stop {
    color: #ff7171;
    border-color: #ff7171;
  }
`;
