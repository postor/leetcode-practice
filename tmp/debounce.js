const f = () => console.time()

function debounce(fn, miliseconds) {
  let timeout
  return () => {
    clearTimeout(timeout)
    timeout = setTimeout(fn, miliseconds)
  }
}