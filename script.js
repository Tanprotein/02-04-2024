document.querySelector('.heart').addEventListener('click', function() {
    document.querySelector('.envelope').classList.add('hidden');
    document.querySelector('.letter').classList.remove('hidden');
  });
  
  function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
  }