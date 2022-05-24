const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];

function addContacts() {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 50000; i++) {
    const child = document.createElement("div");
    child.textContent = i;
    child.classList.add("contact");
    fragment.appendChild(child);
  }
  contacts.appendChild(fragment);
}

contacts.addEventListener("scroll", () => {
  const scrollTop = contacts.scrollTop;
  const contactHeight = 18.5185;
  let topItemIndex = -1;
  for(let i = 1; i <= 50000; i++) {
    if(scrollTop - Math.ceil(contactHeight * i) <= -19) {
      topItemIndex = i - 1;
      break;
    }
  }
  if (topItemIndex !== -1) {
    stickyHeader.textContent = contacts.children[topItemIndex].textContent;
  }
});

addContacts();
