const getRandomColor= () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const getgradient = () => {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  const color3 = getRandomColor();
  document.body.style.background = `linear-gradient(to right, ${color1}, ${color2}, ${color3})`;}
  
  const button=document.getElementById("button" )
  button.addEventListener("click",()=>{getgradient()});
