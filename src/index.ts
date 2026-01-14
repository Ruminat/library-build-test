import styles from "./style.module.scss";

const element = document.createElement("div");

element.className = styles.myClass;
element.textContent = "Hello from TypeScript + SCSS!";

document.body.appendChild(element);
