const logo = document.querySelector(".logo");
const caseVariableBtn = document.getElementById("case-variable");
const caseScopeBtn = document.getElementById("case-scope");
const caseThisBtn = document.getElementById("case-this");
const caseHeapBtn = document.getElementById("case-heap");
const caseButtonsContainer = document.getElementById("case-buttons-container");

const cases = {
  variableRegularQuestion: document.querySelector(".case-variable-regular"),
  variableRegularAnswer: document.querySelector(".case-variable-regular .answer"),
  variableHoistingQuestion: document.querySelector(".case-variable-hoisting"),
  variableHoistingAnswer: document.querySelector(".case-variable-hoisting .answer"),
  variableTDZQuestion: document.querySelector(".case-variable-tdz"),
  variableTDZAnswer: document.querySelector(".case-variable-tdz .answer"),
  variableFNQuestion: document.querySelector(".case-variable-fn"),
  variableFNAnswer: document.querySelector(".case-variable-fn .answer"),
  scopeChainQuestion: document.querySelector(".case-scope-chain"),
  scopeChainAnswer: document.querySelector(".case-scope-chain .answer"),
  thisGlobalQuestion: document.querySelector(".case-this-global"),
  thisGlobalAnswer: document.querySelector(".case-this-global .answer"),
  thisRegularQuestion: document.querySelector(".case-this-regular"),
  thisRegularAnswer: document.querySelector(".case-this-regular .answer"),
  thisStrictRegularQuestion: document.querySelector(".case-this-regular-strict"),
  thisStrictRegularAnswer: document.querySelector(".case-this-regular-strict .answer"),
  thisArrowQuestion: document.querySelector(".case-this-arrow"),
  thisArrowAnswer: document.querySelector(".case-this-arrow .answer"),
  heapQuestion: document.querySelector(".case-heap"),
};

let activeCase = null;

let regularCaseBtn = null;
let hoistingCaseBtn = null;
let tdzCaseBtn = null;

let globalThisBtn = null;
let regularFnThisBtn = null;
let regularFnStrictThisBtn = null;
let arrowFnThisBtn = null;

caseHeapBtn.addEventListener("click", () => {
  clearCaseButtonContainer();
  activeCase = "heapQuestion";
  showActiveCase();
  caseHeapBtn.style.display = "none";
  caseVariableBtn.style.display = "none";
  caseScopeBtn.style.display = "none";
  caseThisBtn.style.display = "none";
  logo.style.display = "none";
});

caseThisBtn.addEventListener("click", () => {
  clearCaseButtonContainer();
  createThisButtons();
  listenThisButtonsClickEvent();
});

caseScopeBtn.addEventListener("click", () => {
  clearCaseButtonContainer();
  activeCase = "scopeChainQuestion";
  showActiveCase();
});

caseVariableBtn.addEventListener("click", () => {
  clearCaseButtonContainer();
  createVariableButtons();
  listenVariableButtonsClickEvent();
});

function createButtonElement(text, color) {
  const btnClass = `focus:outline-none mr-2 text-white bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 font-medium rounded-lg text-lg px-8 py-3 mb-2 dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-900`;
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.className = btnClass;
  return btn;
}

function appendElementToTargetElement(element, target) {
  target.appendChild(element);
}

function clearCaseButtonContainer() {
  caseButtonsContainer.innerHTML = "";
}

function createVariableButtons() {
  regularCaseBtn = createButtonElement("Regular Case", "green");
  hoistingCaseBtn = createButtonElement("Hoisting Case", "teal");
  tdzCaseBtn = createButtonElement("TDZ Case", "pink");
  fnCaseBtn = createButtonElement("Function Case", "sky");
  appendElementToTargetElement(regularCaseBtn, caseButtonsContainer);
  appendElementToTargetElement(hoistingCaseBtn, caseButtonsContainer);
  appendElementToTargetElement(tdzCaseBtn, caseButtonsContainer);
  appendElementToTargetElement(fnCaseBtn, caseButtonsContainer);
}

function listenVariableButtonsClickEvent() {
  regularCaseBtn.addEventListener("click", () => {
    activeCase = "variableRegularQuestion";
    showActiveCase();
  });
  hoistingCaseBtn.addEventListener("click", () => {
    activeCase = "variableHoistingQuestion";
    showActiveCase();
  });
  tdzCaseBtn.addEventListener("click", () => {
    activeCase = "variableTDZQuestion";
    showActiveCase();
  });
  fnCaseBtn.addEventListener("click", () => {
    activeCase = "variableFNQuestion";
    showActiveCase();
  });
}

function createThisButtons() {
  globalThisBtn = createButtonElement("Global This", "green");
  regularFnThisBtn = createButtonElement("Regular Function", "teal");
  regularFnStrictThisBtn = createButtonElement("Regular Function With Steroids", "red");
  arrowFnThisBtn = createButtonElement("Arrow Function", "pink");
  appendElementToTargetElement(globalThisBtn, caseButtonsContainer);
  appendElementToTargetElement(regularFnThisBtn, caseButtonsContainer);
  appendElementToTargetElement(regularFnStrictThisBtn, caseButtonsContainer);
  appendElementToTargetElement(arrowFnThisBtn, caseButtonsContainer);
}

function listenThisButtonsClickEvent() {
  globalThisBtn.addEventListener("click", () => {
    activeCase = "thisGlobalQuestion";
    showActiveCase();
  });
  regularFnThisBtn.addEventListener("click", () => {
    activeCase = "thisRegularQuestion";
    showActiveCase();
  });
  regularFnStrictThisBtn.addEventListener("click", () => {
    activeCase = "thisStrictRegularQuestion";
    showActiveCase();
  });
  arrowFnThisBtn.addEventListener("click", () => {
    activeCase = "thisArrowQuestion";
    showActiveCase();
  });
}

function removeHideFromElement(element) {
  element.classList.remove("hide");
}

function showActiveCase() {
  Object.keys(cases).forEach((caseName) => {
    if (!caseName.includes(activeCase)) cases[caseName].classList.add("hide");
    else cases[caseName].classList.remove("hide");
  });
}

document.addEventListener("keypress", (e) => {
  if (e.key !== "Enter") return;
  switch (activeCase) {
    case "variableRegularQuestion":
      activeCase = "variableRegular";
      showActiveCase();
      break;
    case "variableHoistingQuestion":
      activeCase = "variableHoisting";
      showActiveCase();
      break;
    case "variableTDZQuestion":
      activeCase = "variableTDZ";
      showActiveCase();
      break;
    case "variableFNQuestion":
      activeCase = "variableFN";
      showActiveCase();
      break;
    case "scopeChainQuestion":
      activeCase = "scopeChain";
      showActiveCase();
      break;
    case "thisGlobalQuestion":
      activeCase = "thisGlobal";
      showActiveCase();
      break;
    case "thisRegularQuestion":
      activeCase = "thisRegular";
      showActiveCase();
      break;
    case "thisStrictRegularQuestion":
      activeCase = "thisStrictRegular";
      showActiveCase();
      break;
    case "thisArrowQuestion":
      activeCase = "thisArrow";
      showActiveCase();
      break;

    default:
      break;
  }
});
