/* Event fired on the drag target */
function dragStartEvent(event) {
    console.log('dragStartEvent');
    event.dataTransfer.setData("Text", event.target.id);
  }

  /* Events fired on over the drop target */
  function dragOverEvent(event) {
    console.log('dragOverEvent');
    event.preventDefault();
  }

  /* Events fired on drop */
  function dropEvent(event) {
    console.log(event);
    console.log('dropEvent');
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    if (event.target.firstElementChild.id == "answer2") {
      event.target.parentElement.style = "background-color: #43CD80; color: #fff; border-radius: 5px";
      document.getElementById('respostaCorreta').value = '1';
    } else {
      event.target.parentElement.style = "background-color: #FF4040; color: #fff; border-radius: 5px";
      document.getElementById('respostaCorreta').value = '0';
    }

  }