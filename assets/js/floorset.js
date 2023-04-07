(() => {

  let activatedFloor = null;
  const floorSelect = document.getElementById("floorSelect");
  const legend = document.getElementById("legendDialog");
  const legendClose = document.getElementById("legendClose");
  addEventListeners();

  function addEventListeners() {
    const cells = document.querySelectorAll(".enemyList .floorCell");
    for (const cell of cells) {
      cell.addEventListener("mouseleave", onLeaveFloorCell);
      cell.addEventListener("mouseenter", onHoverFloorCell);
      cell.addEventListener("click", onClickFloorCell);
    }
    floorSelect.addEventListener("change", (event) => {
      activatedFloor = event.target.value || null;
      selectFloor(activatedFloor);
    });
    const warningIcons = document.querySelectorAll(".warningIcon");
    for (const icon of warningIcons) {
      icon.addEventListener("click", () => legend.showModal());
    }
    legendClose.addEventListener("click", () => legend.close());
  }

  function onLeaveFloorCell(event) {
    selectFloor(null);
  }

  function onHoverFloorCell(event) {
    const floor = getEventFloor(event);
    selectFloor(floor);
  };

  function onClickFloorCell(event) {
    const floor = getEventFloor(event);
    if (floor === activatedFloor) {
      activatedFloor = null;
      floorSelect.value = "";
    } else {
      activatedFloor = floor;
      floorSelect.value = floor;
    }
    selectFloor(activatedFloor);
  };

  function getRows() {
    return document.querySelectorAll(".enemyList tbody tr");
  }

  function getAllFloorCells() {
    return document.querySelectorAll(".enemyList .floorCell");
  }

  function getColumnCells(floor) {
    return document.querySelectorAll(`.enemyList .floorCell[data-floor="${floor}"]`);
  }

  function getEventFloor(event) {
    return event.target.getAttribute("data-floor");
  }

  function selectFloor(floor) {
    if (!floor && activatedFloor) {
      selectFloor(activatedFloor);
      return;
    }
    const rows = getRows();
    for (const row of rows) {
      const startFloor = row.getAttribute("data-start-floor");
      const endFloor = row.getAttribute("data-end-floor");
      if (floor && startFloor <= floor && endFloor >= floor) {
        row.classList.add("highlight");
      } else {
        row.classList.remove("highlight");
      }
    }
    const allCells = getAllFloorCells();
    for (const cell of allCells) {
      cell.classList.remove("highlight");
    }
    const columnCells = getColumnCells(floor);
    for (const cell of columnCells) {
      cell.classList.add("highlight");
    }
  }
})();
