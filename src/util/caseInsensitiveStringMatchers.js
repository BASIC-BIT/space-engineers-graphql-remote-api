function includes(a, b) {
  return a.toLowerCase().includes(b.toLowerCase());
}

function match(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}

export {
  includes,
  match,
}