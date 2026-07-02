//    <script>

        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname) {
            for (tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

    // </script>

    // <script>

        var sidemeu = document.getElementById("sidemenu")

        function openmenu(){
            sidemeu.style.right = "0";
        }

        function closemenu(){
            sidemeu.style.right = "-200px";
        }

    // </script>

    // <script>
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwa5bp653NXM5bGquzAof4LUrL8RQDhM2zrCkN2e1t6VkQaov4GDQ09DspIqTbnglDcyw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML= ""
        },2000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
// </script>
