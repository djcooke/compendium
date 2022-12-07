(() => {

  let activatedFloor = null;
  const select = document.getElementById("floorSelect");
  addEventListeners();

  function addEventListeners() {
    const cells = document.querySelectorAll(".enemyList .floorCell");
    for (const cell of cells) {
      cell.addEventListener("mouseleave", onLeave);
      cell.addEventListener("mouseenter", onHover);
      cell.addEventListener("click", onClick);
    }
    select.addEventListener("change", (event) => {
      activatedFloor = event.target.value || null;
      selectFloor(activatedFloor);
    });
  }

  function onLeave(event) {
    selectFloor(null);
  }

  function onHover(event) {
    const floor = getEventFloor(event);
    selectFloor(floor);
  };

  function onClick(event) {
    const floor = getEventFloor(event);
    if (floor === activatedFloor) {
      activatedFloor = null;
      select.value = "";
    } else {
      activatedFloor = floor;
      select.value = floor;
    }
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
