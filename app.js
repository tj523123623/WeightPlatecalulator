const translations = {
  en: {
    title: "Full Plate Weight & Creation Calculator",
    subtitle: "Create a plate size from a target weight, or calculate weight from existing dimensions.",
    calcModeLabel: "Calculator Mode",
    modeCreate: "Create from Weight",
    modeWeight: "Weight from Size",
    shapeModeLabel: "Plate Shape",
    shapeSolid: "Solid Plate",
    shapeHole: "Center Hole",
    materialLabel: "Material",
    matCastIron: "Cast Iron",
    matSteel: "Steel",
    matAluminum: "Aluminum",
    matCopper: "Copper",
    matCustom: "Custom Density",
    densityLabel: "Density (kg/m³)",
    allowanceLabel: "Casting Allowance (%)",
    unitsLabel: "Units",
    unitCm: "Centimeters",
    unitMm: "Millimeters",
    unitIn: "Inches",
    targetMassLabel: "Target Weight (kg)",
    solveForLabel: "Solve For",
    solveDiameter: "Find Diameter",
    solveThickness: "Find Thickness",
    fixedThicknessLabel: "Fixed Thickness",
    fixedDiameterLabel: "Fixed Diameter",
    holeLabel: "Center Hole Diameter",
    holeLabel2: "Center Hole Diameter",
    outerDiameterLabel: "Outer Diameter",
    thicknessLabel: "Thickness",
    mainResultLabel: "Main Result",
    calcSummaryLabel: "Calculation Summary",
    lblNetWeight: "Net Weight",
    lblGrossWeight: "Gross Weight",
    lblVolume: "Volume",
    lblOuterDiameter: "Outer Diameter",
    lblThickness: "Thickness",
    lblCenterHole: "Center Hole",
    lblDensity: "Density",
    lblNoteTitle: "Note:",
    lblNoteText: "Gross weight includes casting allowance. Net weight is the finished part weight.",
    blueprintTitle: "Blueprint View",
    lblFormula: "Formula:",
    lblFormulaSolid: "Solid plate:",
    lblFormulaHole: "With center hole:",
    errTitle: "Check Input",
    errDensity: "Density must be greater than zero.",
    errAllowance: "Casting allowance cannot be negative.",
    errTargetWeight: "Target weight must be greater than zero.",
    errThickness: "Thickness must be greater than zero.",
    errDiameter: "Diameter must be greater than zero.",
    errHoleNegative: "Hole diameter cannot be negative.",
    errHole: "Hole diameter must be smaller than the outer diameter.",
    errBoth: "Diameter and thickness must be greater than zero.",
    detailStartZero: "Enter values to calculate the plate.",
    detailReqDiameter: "Required outer diameter for the target weight.",
    detailReqThickness: "Required thickness for the target weight.",
    detailEstimated: "Estimated finished part weight from the dimensions."
  },
  si: {
    title: "සම්පූර්ණ තැටි බර සහ නිර්මාණ ගණකය",
    subtitle: "ඉලක්ක බරින් තැටියේ ප්‍රමාණය නිර්මාණය කරන්න, හෝ පවතින මානයන්ගෙන් බර ගණනය කරන්න.",
    calcModeLabel: "ගණක මාදිලිය",
    modeCreate: "බරින් නිර්මාණය",
    modeWeight: "ප්‍රමාණයෙන් බර",
    shapeModeLabel: "තැටියේ හැඩය",
    shapeSolid: "ඝන තැටිය",
    shapeHole: "මැද සිදුර",
    materialLabel: "ද්‍රව්‍යය",
    matCastIron: "වාත්තු යකඩ",
    matSteel: "වානේ",
    matAluminum: "ඇලුමිනියම්",
    matCopper: "තඹ",
    matCustom: "අභිරුචි ඝනත්වය",
    densityLabel: "ඝනත්වය (kg/m³)",
    allowanceLabel: "වාත්තු දීමනාව (%)",
    unitsLabel: "ඒකක",
    unitCm: "සෙන්ටිමීටර",
    unitMm: "මිලිමීටර",
    unitIn: "අඟල්",
    targetMassLabel: "ඉලක්ක බර (kg)",
    solveForLabel: "සොයන්නේ කුමක්ද?",
    solveDiameter: "විෂ්කම්භය සොයන්න",
    solveThickness: "ඝනකම සොයන්න",
    fixedThicknessLabel: "ස්ථාවර ඝනකම",
    fixedDiameterLabel: "ස්ථාවර විෂ්කම්භය",
    holeLabel: "මැද සිදුරේ විෂ්කම්භය",
    holeLabel2: "මැද සිදුරේ විෂ්කම්භය",
    outerDiameterLabel: "පිටත විෂ්කම්භය",
    thicknessLabel: "ඝනකම",
    mainResultLabel: "ප්‍රධාන ප්‍රතිඵලය",
    calcSummaryLabel: "ගණනය කිරීමේ සාරාංශය",
    lblNetWeight: "ශුද්ධ බර",
    lblGrossWeight: "දළ බර",
    lblVolume: "පරිමාව",
    lblOuterDiameter: "පිටත විෂ්කම්භය",
    lblThickness: "ඝනකම",
    lblCenterHole: "මැද සිදුර",
    lblDensity: "ඝනත්වය",
    lblNoteTitle: "සටහන:",
    lblNoteText: "දළ බරට වාත්තු දීමනාව ඇතුළත් වේ. ශුද්ධ බර යනු නිමි කොටසේ බරයි.",
    blueprintTitle: "සැලැස්ම",
    lblFormula: "සූත්‍රය:",
    lblFormulaSolid: "ඝන තැටියක් සඳහා:",
    lblFormulaHole: "මැද සිදුරක් සහිත විට:",
    errTitle: "ඇතුළත් කිරීම පරීක්ෂා කරන්න",
    errDensity: "ඝනත්වය බිංදුවට වඩා වැඩි විය යුතුය.",
    errAllowance: "වාත්තු දීමනාව ඍණ අගයක් විය නොහැක.",
    errTargetWeight: "ඉලක්ක බර බිංදුවට වඩා වැඩි විය යුතුය.",
    errThickness: "ඝනකම බිංදුවට වඩා වැඩි විය යුතුය.",
    errDiameter: "විෂ්කම්භය බිංදුවට වඩා වැඩි විය යුතුය.",
    errHoleNegative: "සිදුරේ විෂ්කම්භය ඍණ අගයක් විය නොහැක.",
    errHole: "සිදුරේ විෂ්කම්භය පිටත විෂ්කම්භයට වඩා කුඩා විය යුතුය.",
    errBoth: "විෂ්කම්භය සහ ඝනකම බිංදුවට වඩා වැඩි විය යුතුය.",
    detailStartZero: "තැටිය ගණනය කිරීමට අගයන් ඇතුළත් කරන්න.",
    detailReqDiameter: "ඉලක්ක බර සඳහා අවශ්‍ය පිටත විෂ්කම්භය.",
    detailReqThickness: "ඉලක්ක බර සඳහා අවශ්‍ය ඝනකම.",
    detailEstimated: "මානයන්ගෙන් ඇස්තමේන්තුගත නිමි කොටසේ බර."
  }
};

const state = {
  language: "en",
  unit: "cm"
};

const elements = {
  material: document.getElementById("material"),
  density: document.getElementById("density"),
  allowance: document.getElementById("allowance"),
  units: document.getElementById("units"),
  createPanel: document.getElementById("createPanel"),
  weightPanel: document.getElementById("weightPanel"),
  fixedThicknessWrap: document.getElementById("fixedThicknessWrap"),
  fixedDiameterWrap: document.getElementById("fixedDiameterWrap"),
  holeWrapCreate: document.getElementById("holeWrapCreate"),
  holeWrapWeight: document.getElementById("holeWrapWeight"),
  targetMass: document.getElementById("targetMass"),
  fixedThickness: document.getElementById("fixedThickness"),
  fixedDiameter: document.getElementById("fixedDiameter"),
  holeDiameterCreate: document.getElementById("holeDiameterCreate"),
  outerDiameterWeight: document.getElementById("outerDiameterWeight"),
  thicknessWeight: document.getElementById("thicknessWeight"),
  holeDiameterWeight: document.getElementById("holeDiameterWeight"),
  mainResult: document.getElementById("mainResult"),
  mainDetail: document.getElementById("mainDetail"),
  resultPanel: document.querySelector(".result-panel"),
  sumNetWeight: document.getElementById("sumNetWeight"),
  sumGrossWeight: document.getElementById("sumGrossWeight"),
  sumVolume: document.getElementById("sumVolume"),
  sumDiameter: document.getElementById("sumDiameter"),
  sumThickness: document.getElementById("sumThickness"),
  sumHole: document.getElementById("sumHole"),
  sumDensity: document.getElementById("sumDensity"),
  svg: document.getElementById("svgView"),
  topPlate: document.getElementById("topPlate"),
  topHole: document.getElementById("topHole"),
  diameterLine: document.getElementById("diameterLine"),
  diameterText: document.getElementById("diameterText"),
  plateLabelText: document.getElementById("plateLabelText"),
  sidePlate: document.getElementById("sidePlate"),
  sideHole: document.getElementById("sideHole"),
  thicknessMain: document.getElementById("thicknessMain"),
  thicknessTop: document.getElementById("thicknessTop"),
  thicknessBot: document.getElementById("thicknessBot"),
  thicknessText: document.getElementById("thicknessText")
};

function t(key) {
  return translations[state.language][key] || translations.en[key] || key;
}

function getCheckedValue(name) {
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  return selected ? selected.value : "";
}

function readNumber(input, fallback = NaN) {
  const value = Number.parseFloat(input.value);
  return Number.isFinite(value) ? value : fallback;
}

function factorForUnit(unit) {
  if (unit === "mm") return 0.1;
  if (unit === "in") return 2.54;
  return 1;
}

function unitToCmFactor() {
  return factorForUnit(elements.units.value);
}

function unitLabel() {
  return elements.units.value;
}

function toSelectedUnits(valueCm) {
  return valueCm / unitToCmFactor();
}

function formatNumber(value, digits = 2) {
  if (!Number.isFinite(value)) return "0";
  return Number(value).toFixed(digits);
}

function formatInputValue(value) {
  if (!Number.isFinite(value)) return "";
  return Number(value.toFixed(4)).toString();
}

function convertDimensionInputs(fromUnit, toUnit) {
  const fromFactor = factorForUnit(fromUnit);
  const toFactor = factorForUnit(toUnit);
  const dimensionInputs = [
    elements.fixedThickness,
    elements.fixedDiameter,
    elements.holeDiameterCreate,
    elements.outerDiameterWeight,
    elements.thicknessWeight,
    elements.holeDiameterWeight
  ];

  dimensionInputs.forEach((input) => {
    const value = readNumber(input);
    if (Number.isFinite(value)) {
      const valueCm = value * fromFactor;
      input.value = formatInputValue(valueCm / toFactor);
    }
  });
}

function setLanguage(language) {
  state.language = translations[language] ? language : "en";
  document.documentElement.lang = state.language;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = t(key);
  });

  document.querySelectorAll(".language-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.language);
  });

  calculate();
}

function syncMaterial() {
  const usingCustomDensity = elements.material.value === "custom";
  if (!usingCustomDensity) {
    elements.density.value = elements.material.value;
  }

  elements.density.readOnly = !usingCustomDensity;
}

function updatePanels() {
  const calcMode = getCheckedValue("calcMode");
  const shapeMode = getCheckedValue("shapeMode");
  const solveMode = getCheckedValue("solveMode");

  elements.createPanel.classList.toggle("hidden", calcMode !== "create");
  elements.weightPanel.classList.toggle("hidden", calcMode !== "weight");
  elements.holeWrapCreate.classList.toggle("hidden", shapeMode !== "hole");
  elements.holeWrapWeight.classList.toggle("hidden", shapeMode !== "hole");
  elements.fixedThicknessWrap.classList.toggle("hidden", solveMode !== "diameter");
  elements.fixedDiameterWrap.classList.toggle("hidden", solveMode !== "thickness");
}

function clearSummary() {
  [
    elements.sumNetWeight,
    elements.sumGrossWeight,
    elements.sumVolume,
    elements.sumDiameter,
    elements.sumThickness,
    elements.sumHole,
    elements.sumDensity
  ].forEach((node) => {
    node.textContent = "--";
  });
}

function showError(errorKey) {
  elements.resultPanel.classList.add("is-error");
  elements.mainResult.textContent = t("errTitle");
  elements.mainDetail.textContent = t(errorKey);
  clearSummary();
}

function showResult(valueText, detailKey) {
  elements.resultPanel.classList.remove("is-error");
  elements.mainResult.textContent = valueText;
  elements.mainDetail.textContent = t(detailKey);
}

function updateSummary(result) {
  const unit = unitLabel();

  elements.sumNetWeight.textContent = `${formatNumber(result.netMassKg, 3)} kg`;
  elements.sumGrossWeight.textContent = `${formatNumber(result.grossMassKg, 3)} kg`;
  elements.sumVolume.textContent = `${formatNumber(result.volumeCm3, 3)} cm³`;
  elements.sumDiameter.textContent = `${formatNumber(toSelectedUnits(result.outerDcm), 3)} ${unit}`;
  elements.sumThickness.textContent = `${formatNumber(toSelectedUnits(result.thicknessCm), 3)} ${unit}`;
  elements.sumHole.textContent = `${formatNumber(toSelectedUnits(result.holeDcm), 3)} ${unit}`;
  elements.sumDensity.textContent = `${formatNumber(result.densityKgM3, 0)} kg/m³`;
}

function showZeroState() {
  const unit = unitLabel();

  elements.resultPanel.classList.remove("is-error");
  elements.mainResult.textContent = "0";
  elements.mainDetail.textContent = t("detailStartZero");
  elements.sumNetWeight.textContent = "0.000 kg";
  elements.sumGrossWeight.textContent = "0.000 kg";
  elements.sumVolume.textContent = "0.000 cm³";
  elements.sumDiameter.textContent = `0.000 ${unit}`;
  elements.sumThickness.textContent = `0.000 ${unit}`;
  elements.sumHole.textContent = `0.000 ${unit}`;
  elements.sumDensity.textContent = "0 kg/m³";
  drawBlueprint(0, 0, 0, "0 kg");
}

function allNumericInputsAreZero() {
  const numericInputs = [
    elements.density,
    elements.allowance,
    elements.targetMass,
    elements.fixedThickness,
    elements.fixedDiameter,
    elements.holeDiameterCreate,
    elements.outerDiameterWeight,
    elements.thicknessWeight,
    elements.holeDiameterWeight
  ];

  return numericInputs.every((input) => readNumber(input, 0) === 0);
}

function setAttribute(node, name, value) {
  node.setAttribute(name, String(value));
}

function drawBlueprint(outerDcm, thicknessCm, holeDcm, labelText) {
  const visualD = Math.max(outerDcm, 2);
  const visualT = Math.max(thicknessCm, visualD * 0.045, 0.45);
  const visualHole = Math.max(0, Math.min(holeDcm, outerDcm * 0.95));
  const pad = Math.max(8, visualD * 0.26);
  const gap = Math.max(7, visualD * 0.18);
  const viewWidth = visualD + pad * 3.25;
  const viewHeight = visualD + visualT + gap + pad * 2.25;
  const centerX = (visualD + pad * 1.85) / 2;
  const centerY = pad + visualD / 2;
  const fontSize = Math.max(1.45, viewWidth * 0.038);
  const sideY = centerY + visualD / 2 + gap;
  const unit = unitLabel();

  setAttribute(elements.svg, "viewBox", `0 0 ${viewWidth} ${viewHeight}`);

  setAttribute(elements.topPlate, "cx", centerX);
  setAttribute(elements.topPlate, "cy", centerY);
  setAttribute(elements.topPlate, "r", visualD / 2);

  setAttribute(elements.topHole, "cx", centerX);
  setAttribute(elements.topHole, "cy", centerY);
  setAttribute(elements.topHole, "r", visualHole / 2);
  elements.topHole.style.display = visualHole > 0 ? "block" : "none";

  setAttribute(elements.diameterLine, "x1", centerX - visualD / 2);
  setAttribute(elements.diameterLine, "y1", centerY);
  setAttribute(elements.diameterLine, "x2", centerX + visualD / 2);
  setAttribute(elements.diameterLine, "y2", centerY);

  setAttribute(elements.diameterText, "x", centerX);
  setAttribute(elements.diameterText, "y", centerY - fontSize * 0.55);
  setAttribute(elements.diameterText, "font-size", fontSize);
  elements.diameterText.textContent = `Ø ${formatNumber(toSelectedUnits(outerDcm), 1)} ${unit}`;

  setAttribute(elements.plateLabelText, "x", centerX);
  setAttribute(elements.plateLabelText, "y", centerY + visualD * 0.27);
  setAttribute(elements.plateLabelText, "font-size", Math.max(1.8, visualD * 0.12));
  elements.plateLabelText.textContent = labelText;

  setAttribute(elements.sidePlate, "x", centerX - visualD / 2);
  setAttribute(elements.sidePlate, "y", sideY);
  setAttribute(elements.sidePlate, "width", visualD);
  setAttribute(elements.sidePlate, "height", visualT);

  setAttribute(elements.sideHole, "x", centerX - visualHole / 2);
  setAttribute(elements.sideHole, "y", sideY);
  setAttribute(elements.sideHole, "width", visualHole);
  setAttribute(elements.sideHole, "height", visualT);
  elements.sideHole.style.display = visualHole > 0 ? "block" : "none";

  const measureX = centerX + visualD / 2 + pad * 0.35;
  setAttribute(elements.thicknessMain, "x1", measureX);
  setAttribute(elements.thicknessMain, "y1", sideY);
  setAttribute(elements.thicknessMain, "x2", measureX);
  setAttribute(elements.thicknessMain, "y2", sideY + visualT);

  setAttribute(elements.thicknessTop, "x1", centerX + visualD / 2 + 1);
  setAttribute(elements.thicknessTop, "y1", sideY);
  setAttribute(elements.thicknessTop, "x2", measureX + 2);
  setAttribute(elements.thicknessTop, "y2", sideY);

  setAttribute(elements.thicknessBot, "x1", centerX + visualD / 2 + 1);
  setAttribute(elements.thicknessBot, "y1", sideY + visualT);
  setAttribute(elements.thicknessBot, "x2", measureX + 2);
  setAttribute(elements.thicknessBot, "y2", sideY + visualT);

  setAttribute(elements.thicknessText, "x", measureX + fontSize * 0.45);
  setAttribute(elements.thicknessText, "y", sideY + visualT / 2 + fontSize * 0.15);
  setAttribute(elements.thicknessText, "font-size", fontSize);
  elements.thicknessText.textContent = `${formatNumber(toSelectedUnits(thicknessCm), 1)} ${unit}`;
}

function getHoleDiameterCm(input) {
  const inputValue = readNumber(input, 0);
  if (inputValue < 0) {
    return { error: "errHoleNegative", value: 0 };
  }

  return {
    error: null,
    value: inputValue * unitToCmFactor()
  };
}

function calculateCreateMode(context) {
  const { densityKgM3, allowanceFactor, shapeMode } = context;
  const solveMode = getCheckedValue("solveMode");
  const netMassKg = readNumber(elements.targetMass);

  if (netMassKg <= 0) {
    showError("errTargetWeight");
    return;
  }

  const hole = shapeMode === "hole"
    ? getHoleDiameterCm(elements.holeDiameterCreate)
    : { error: null, value: 0 };

  if (hole.error) {
    showError(hole.error);
    return;
  }

  const grossMassKg = netMassKg * allowanceFactor;
  const volumeM3 = grossMassKg / densityKgM3;
  const volumeCm3 = volumeM3 * 1000000;
  let outerDcm = 0;
  let thicknessCm = 0;

  if (solveMode === "diameter") {
    thicknessCm = readNumber(elements.fixedThickness) * unitToCmFactor();
    if (thicknessCm <= 0) {
      showError("errThickness");
      return;
    }

    const thicknessM = thicknessCm / 100;
    const holeRadiusM = hole.value / 200;
    const outerRadiusSquared = volumeM3 / (Math.PI * thicknessM) + holeRadiusM * holeRadiusM;
    outerDcm = Math.sqrt(outerRadiusSquared) * 200;
    showResult(`${formatNumber(toSelectedUnits(outerDcm), 2)} ${unitLabel()}`, "detailReqDiameter");
  } else {
    outerDcm = readNumber(elements.fixedDiameter) * unitToCmFactor();
    if (outerDcm <= 0) {
      showError("errDiameter");
      return;
    }
    if (hole.value >= outerDcm) {
      showError("errHole");
      return;
    }

    const outerRadiusM = outerDcm / 200;
    const holeRadiusM = hole.value / 200;
    const areaM2 = Math.PI * (outerRadiusM * outerRadiusM - holeRadiusM * holeRadiusM);
    thicknessCm = (volumeM3 / areaM2) * 100;
    showResult(`${formatNumber(toSelectedUnits(thicknessCm), 2)} ${unitLabel()}`, "detailReqThickness");
  }

  updateSummary({
    netMassKg,
    grossMassKg,
    volumeCm3,
    outerDcm,
    thicknessCm,
    holeDcm: hole.value,
    densityKgM3
  });

  drawBlueprint(outerDcm, thicknessCm, hole.value, `${formatNumber(netMassKg, 2)} kg`);
}

function calculateWeightMode(context) {
  const { densityKgM3, allowanceFactor, shapeMode } = context;
  const outerDcm = readNumber(elements.outerDiameterWeight) * unitToCmFactor();
  const thicknessCm = readNumber(elements.thicknessWeight) * unitToCmFactor();
  const hole = shapeMode === "hole"
    ? getHoleDiameterCm(elements.holeDiameterWeight)
    : { error: null, value: 0 };

  if (outerDcm <= 0 || thicknessCm <= 0) {
    showError("errBoth");
    return;
  }

  if (hole.error) {
    showError(hole.error);
    return;
  }

  if (hole.value >= outerDcm) {
    showError("errHole");
    return;
  }

  const outerRadiusM = outerDcm / 200;
  const holeRadiusM = hole.value / 200;
  const thicknessM = thicknessCm / 100;
  const volumeM3 = Math.PI * thicknessM * (outerRadiusM * outerRadiusM - holeRadiusM * holeRadiusM);
  const volumeCm3 = volumeM3 * 1000000;
  const netMassKg = densityKgM3 * volumeM3;
  const grossMassKg = netMassKg * allowanceFactor;

  showResult(`${formatNumber(netMassKg, 3)} kg`, "detailEstimated");
  updateSummary({
    netMassKg,
    grossMassKg,
    volumeCm3,
    outerDcm,
    thicknessCm,
    holeDcm: hole.value,
    densityKgM3
  });

  drawBlueprint(outerDcm, thicknessCm, hole.value, `${formatNumber(netMassKg, 2)} kg`);
}

function calculate() {
  updatePanels();

  const densityKgM3 = readNumber(elements.density);
  const allowancePct = readNumber(elements.allowance, 0);
  const calcMode = getCheckedValue("calcMode");
  const shapeMode = getCheckedValue("shapeMode");

  if (allNumericInputsAreZero()) {
    showZeroState();
    return;
  }

  if (densityKgM3 <= 0) {
    showError("errDensity");
    return;
  }

  if (allowancePct < 0) {
    showError("errAllowance");
    return;
  }

  const context = {
    densityKgM3,
    allowanceFactor: 1 + allowancePct / 100,
    shapeMode
  };

  if (calcMode === "create") {
    calculateCreateMode(context);
  } else {
    calculateWeightMode(context);
  }
}

function bindEvents() {
  document.querySelectorAll("input, select").forEach((control) => {
    const handleControlChange = () => {
      if (control === elements.material) {
        syncMaterial();
      }

      if (control === elements.units && elements.units.value !== state.unit) {
        convertDimensionInputs(state.unit, elements.units.value);
        state.unit = elements.units.value;
      }

      calculate();
    };

    control.addEventListener("input", handleControlChange);
    control.addEventListener("change", handleControlChange);
  });

  document.querySelectorAll(".language-button").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang);
    });
  });
}

bindEvents();
syncMaterial();
setLanguage("en");
