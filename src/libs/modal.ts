export function lockBody() {
  document.body.style.top = `-${window.scrollY}px`;
  document.body.classList.add("locked");
}
export function unlockBody() {
  const scrollY = parseInt(document.body.style.top, 10) * -1;
  document.body.classList.remove("locked");
  document.body.style.top = "";
  window.scrollTo({ top: scrollY });
}
