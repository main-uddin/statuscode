window.fetch('./codes.json')
  .then(res => res.json())
  .then(data => {
    const codesData = data
    document.querySelector('#button').addEventListener('click', handleInput)
    function handleInput () {
      let inputValue = document.querySelector('#input').value
      document.getElementById('target').innerHTML = codesData[inputValue] || "invalid code"
    }
  })