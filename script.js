//your JS code here. If required.
  function replaceElement() {
        var newElement = document.createElement('h1');
         newElement.textContent = 'Entered Metaverse';
         document.getElementById("status").replaceWith(newElement)
        }
        document.getElementById("enterBtn").addEventListener('click', replaceElement)
