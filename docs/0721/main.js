
init();


function init() {

  let delay = 1

  // 背景
  const bgWrap = document.querySelector('.fv-bg-wrapper')
  const bgFilterOne = document.querySelector('.fv-bg-filter-one')
  const bgFilterTwo = document.querySelector('.fv-bg-filter-two')
  const bgFilterThree = document.querySelector('.fv-bg-filter-three')
  const bg = document.querySelector('.fv-bg')
  const sw = window.innerWidth

  // 右から
  // gsap.set(bgWrap, {
  //   x: sw,
  // })
  // gsap.to(bgWrap, {
  //   x: 0,
  //   duration: 1,
  //   delay: delay,
  //   ease: Expo.easeInOut,
  // })

  // // 中身を逆に動かして固定してるように
  // gsap.set(bg, {
  //   x: -sw,
  // })
  // gsap.to(bg, {
  //   x: 0,
  //   duration: 1,
  //   delay: delay,
  //   ease: Expo.easeInOut,
  // })

  gsap.set(bgFilterOne, {
    x: 0,
  })
  gsap.to(bgFilterOne, {
    x: -sw,
    duration: 0.8,
    delay: delay,
    ease: Power3.easeInOut,
  })
  gsap.set(bgFilterTwo, {
    x: 0,
  })
  gsap.to(bgFilterTwo, {
    x: -sw,
    duration: 0.8,
    delay: delay + 0.1,
    ease: Power3.easeInOut,
  })
  gsap.set(bgFilterThree, {
    x: 0,
  })
  gsap.to(bgFilterThree, {
    x: -sw,
    duration: 0.8,
    delay: delay + 0.2,
    ease: Power3.easeInOut,
  })


  // タイトル
  delay += 0.55
  const titleBg = document.querySelector('.fv-contents-title .bg')
  const title = document.querySelector('.fv-contents-title .title');
  const titlew = titleBg.clientWidth;
  gsap.set(titleBg, {
    x: titlew,
  })
  gsap.to(titleBg, {
    x: 0,
    duration: 0.5,
    delay: delay + 0.5,
    ease: Expo.easeOut,
  })
  gsap.to(titleBg, {
    scaleX: 0,
    duration: 1,
    delay: delay + 1.0,
    ease: Expo.easeOut,
  })
  gsap.set(title, {
    opacity:0,
  })
  gsap.to(title, {
    opacity:1,
    duration: 0.001,
    delay: delay + 1.0,
    ease: Expo.easeOut,
  })


  // テキスト
  delay += 0
  const textBg = document.querySelector('.fv-contents-text .bg');
  const text = document.querySelector('.fv-contents-text .text');
  const textw = textBg.clientWidth;
  gsap.set(textBg, {
    x: textw,
  })
  gsap.to(textBg, {
    x: 0,
    duration: 0.5,
    delay: delay + 0.7,
    ease: Expo.easeOut,
  })
  gsap.to(textBg, {
    scaleX: 0,
    duration: 1,
    delay: delay + 1.2,
    ease: Expo.easeOut,
  })
  gsap.set(text, {
    opacity:0,
  })
  gsap.to(text, {
    opacity:1,
    duration: 0.001,
    delay: delay + 1.2,
    ease: Expo.easeOut,
  })
}