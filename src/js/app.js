import Collapse from "./Collapse.js";

document.addEventListener("DOMContentLoaded", () => {
  const collapseContainer = document.querySelector(".collapse-container");
  const buttonName = "Collapse";
  const content =
    "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.";

  new Collapse(collapseContainer, buttonName, content);
});
