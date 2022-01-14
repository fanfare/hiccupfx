;(()=>{
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  function randstring(length) {
    if (!length) {length = 1}
    var text = ''
    var possible = 'abcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i < length; i++) {
      text += possible[Math.floor(Math.random() * possible.length)]
    }
    return text
  }
  const janked = function(el) {
    let count = Number(el.dataset.count)
    count++
    if (count > 6) {
      el.style.display = "block"
      el.style.marginTop = `0px`
      el.style.marginBottom = `0px`
      let alljank = document.querySelectorAll('jankxuuuu')
      for (let i=0;i<alljank.length;i++) {
        alljank[i].remove()
      }
      return null
    }
    el.dataset.count = count
    el.style.display = "block"
    el.style.marginTop = `${randint(0,20)}px`
    el.style.marginBottom = `${randint(0,10)}px`
    setTimeout(()=>{
      janked(el)
    }, randint(220,1100))
  }
  let children = document.querySelectorAll(`body > *:not(script):not(noscript)`)
  if (children.length === 1 || children.length === 0) {
    children = document.querySelectorAll(`body *:not(script):not(noscript)`)
  }
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]]
    }
    return array
  }
  children = Array.from(children)
  shuffle(children)
  children.splice(6)
  for (let i=0;i<children.length;i++) {
    let child = children[i]
    const rand = randstring(12)
    child.insertAdjacentHTML(`beforebegin`, `<jankxuuuu data-count="0" id="${rand}"></jankxuuuu>`)
    const el = document.querySelector(`#${rand}`)
    janked(el)
  }
  let fontsize = window.getComputedStyle(document.body, null).getPropertyValue('font-size')
  let a = document.querySelector("a")
  let linksize = fontsize
  let bodymarginleft = window.getComputedStyle(document.body, null).getPropertyValue('margin-left')
  let bodymargintop = window.getComputedStyle(document.body, null).getPropertyValue('margin-top')
  if (a) {
    linksize = window.getComputedStyle(a, null).getPropertyValue('font-size')
  }
  fontsize = Number(fontsize.substring(0, fontsize.length - 2))
  linksize = Number(linksize.substring(0, linksize.length - 2))
  bodymargintop = Number(bodymargintop.substring(0, bodymargintop.length - 2))
  let clonefontsize = fontsize
  let clonelinksize = linksize
  let clonebodymargintop = bodymargintop
  let fontfamily = window.getComputedStyle(document.body, null).getPropertyValue('font-family')
  function nloop(count) {
    count++
    if (count > 4) {
      document.body.style.fontFamily = fontfamily
      document.body.style.fontSize = fontsize + "px"
      document.body.style.marginTop = bodymargintop + "px"
      return null
    }
    clonefontsize = clonefontsize + randint(-2,2)
    if (clonefontsize > fontsize + 14) {
      clonefontsize = fontsize + 14
    }
    if (clonefontsize < 8) {
      clonefontsize = 8
    }
    if (Math.random() > .5) {
      let rand = Math.random()
      let randfamily
      if (rand > .7) {
        randfamily = "Arial"
      }
      else if (rand > .4) {
        randfamily = "Verdana"
        clonefontsize -= randint(0,3)
      }
      else if (rand > .2) {
        randfamily = "Georgia"
      }
      else {
        randfamily = "Times New Roman"
      }
      document.body.style.fontFamily = randfamily
    }
    clonebodymargintop += randint(-1,1)
    document.body.style.fontSize = clonefontsize + "px"
    if (Math.random() > .82) {
      document.body.style.marginTop = clonebodymargintop + "px"
    }
    setTimeout(()=>{
      nloop(count)
    },randint(220,900))
  }
  async function kloop(count) {
    count++
    let unblockifseen = document.querySelector('.xxunblockifseenxx')
    if (unblockifseen) {
      let xrevert = unblockifseen.dataset.revert
      unblockifseen.style.display = xrevert
      unblockifseen.classList.remove('xxunblockifseenxx')
    }
    if (count > 2) {
      return null
    }
    await sleep(0)
    var elements = document.querySelectorAll("*:not(img):not(noscript):not(html):not(title):not(head):not(link):not(meta):not(body):not(script)")
    let val = randint(0,elements.length-1)
    let el = elements[val]
    let yrevert = window.getComputedStyle(el, null).getPropertyValue('display')
    el.dataset.revert = yrevert
    el.classList.add("xxunblockifseenxx")
    if (Math.random() > .5) {
      el.style.display = "inline"
    }
    else {
      el.style.display = "none"
    }
    setTimeout(()=>{
      kloop(count)
    },randint(520,1100))    
  }
  kloop(0)
  nloop(0)
})();