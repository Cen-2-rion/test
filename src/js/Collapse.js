class Collapse {
  constructor(parent, buttonName, content) {
    this.parent = parent;
    this.buttonName = buttonName;
    this.content = content;
    this.timeoutId = null;

    this.init();
  }

  init() {
    this.createMarkup();
    this.addEventListeners();
  }

  createMarkup() {
    this.parent.innerHTML = `
      <button class="collapse-btn">${this.buttonName}</button>
      <div class="collapse-content">
        <div class="content-box">${this.content}</div>
      </div>
    `;
  }

  addEventListeners() {
    this.collapseBtn = this.parent.querySelector(".collapse-btn");
    this.collapseContent = this.parent.querySelector(".collapse-content");

    this.collapseBtn.addEventListener("click", this.toggleContent);
  }

  toggleContent = () => {
    if (this.collapseContent.clientHeight > 0) {
      this.closeContent();
    } else {
      this.openContent();
    }
  };

  openContent() {
    this.collapseContent.style.height = `${this.collapseContent.scrollHeight}px`;
    this.collapseBtn.classList.add("active");

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }

    this.timeoutId = setTimeout(() => {
      this.collapseBtn.classList.remove("active");
      this.closeContent();
    }, 5000);
  }

  closeContent() {
    this.collapseContent.style.height = "0px";
  }
}

export default Collapse;
