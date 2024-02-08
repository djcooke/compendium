var charts = (function () {

  const SVG_NS = 'http://www.w3.org/2000/svg';

  return {
    drawPotdChestDistribution: function (data) {
      drawChestDistribution('potd', data, makePotdChestDistributionColumns());
    },

    drawHohChestDistribution: function (data) {
      drawChestDistribution('hoh', data, makeHohChestDistributionColumns());
    },

    writeDropRatesTable: function (data, tableId) {
      const table = document.getElementById(tableId);
      const rows = data.map(datarow => {
        return [
          datarow.enemyType,
          datarow.normalDrops,
          datarow.normalKills,
          get_percent(datarow.normalDrops, datarow.normalKills),
          datarow.fortunedDrops,
          datarow.fortunedKills,
          get_percent(datarow.fortunedDrops, datarow.fortunedKills)
        ];
      });
      table.append(makeTbody(rows));
    },

    writeAlterationTable: function (data, tableId) {
      const table = document.getElementById(tableId);
      let totalMimics = 0;
      let totalKorrigans = 0;
      const rows = data.map(datarow => {
        const mimics = parseInt(datarow.mimics);
        totalMimics += mimics;
        const korrigans = parseInt(datarow.korrigans);
        totalKorrigans += korrigans;
        const total = mimics + korrigans;
        return [
          datarow.floorSet,
          mimics,
          get_percent(mimics, total),
          korrigans,
          get_percent(korrigans, total)
        ];
      });
      const totalAll = totalMimics + totalKorrigans;
      rows.push([
        'Total',
        totalMimics,
        get_percent(totalMimics, totalAll),
        totalKorrigans,
        get_percent(totalKorrigans, totalAll)
      ]);
      table.append(makeTbody(rows));
    }
  };

  function drawChestDistribution(dungeon, data, columns) {
    const viewboxWidth = 1000;
    const lineSpacing = 100;
    const viewboxHeight = lineSpacing * (data.length - 1);

    data.forEach(floorset => {
      floorset.total_gold = 0;
      floorset.total_silver = 0;
      floorset.total_bronze = 0;
      columns.forEach(column => {
        floorset['total_' + column.chestType] += parseInt(floorset[column.key])
      })
    });

    let y = 0;
    data.forEach(floorset => {
      let x = 0;
      columns.forEach(column => {
        column.points.unshift(coords(x, y));
        let chestCount = parseInt(floorset['total_' + column.chestType]);
        if (chestCount > 0) {
          x = x + parseInt(floorset[column.key]) / chestCount * parseFloat(floorset['percent_' + column.chestType]) * (viewboxWidth / 100);
          x = Math.min(Math.round(x), viewboxWidth);
        }
        column.points.push(coords(x, y));
      });
      y += lineSpacing;
    });

    let chart = document.createElementNS(SVG_NS, 'svg');

    chart.classList.add('percentAreaChart');
    chart.setAttribute('width', '50vw');
    chart.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    // SVG coordinate system: width=10000 (percent*100), height=100*(floorsetCount-1)
    chart.setAttribute('viewBox', `0 0 ${viewboxWidth} ${viewboxHeight}`)

    const floorSelectorId = `${dungeon}ChestContents_floorSelect`;

    function deselectAll() {
      let allLines = chart.getElementsByTagName('line');
      for (let line of allLines) {
        line.classList.remove('selected');
      }
      let selectedShape = chart.getElementsByClassName('selectedShape');
      for (let shape of selectedShape) {
        shape.remove();
      }
      let floorSelect = document.getElementById(floorSelectorId);
      floorSelect.value = -1;
    }

    function selectLine(lineY) {
      deselectAll();
      let line = document.getElementById(`${dungeon}ChestContentsLine_${lineY}`);
      line.classList.add('selected');
      let i = lineY / lineSpacing;
      makeFloorsetDropsTable(`${dungeon}ChestContentsDataTitle`, `${dungeon}ChestContentsDataTable`, columns, data[i]);
      let floorSelect = document.getElementById(floorSelectorId);
      floorSelect.value = i;
    }

    function selectColumn(column) {
      deselectAll();
      let polygon = document.getElementById(`${dungeon}ChestContentsColumn_${column.key}`);
      let selected = polygon.cloneNode();
      selected.classList.add('selectedShape');
      chart.appendChild(selected);
      makeItemDropsByFloorTable(`${dungeon}ChestContentsDataTitle`, `${dungeon}ChestContentsDataTable`, column, data);
    }

    // draw column shapes
    columns.forEach(column => {
      let polygon = document.createElementNS(SVG_NS, 'polygon');
      polygon.id = `${dungeon}ChestContentsColumn_${column.key}`;
      polygon.setAttribute('points', column.points.join(' '));
      polygon.setAttribute('fill', column.fillColour);
      polygon.addEventListener('click', (event) => {
        let pt = getViewboxPoint(chart, event);
        let proximity = pt.y % lineSpacing;
        let threshold = lineSpacing * 0.2;
        if (proximity < threshold) {
          let lineY = pt.y - (pt.y % lineSpacing);
          selectLine(lineY);
        } else if (Math.abs(proximity - lineSpacing) < threshold) {
          let lineY = pt.y + (Math.abs(proximity - lineSpacing));
          selectLine(lineY);
        } else {
          selectColumn(column);
        }
      });
      chart.appendChild(polygon)
    });

    // draw floorset lines
    const hoverLineWidth = 20; // adjust if needed
    for (let y = 0; y <= viewboxHeight; y += lineSpacing) {
      // Create the visible line
      let visibleLine = document.createElementNS(SVG_NS, 'line');
      visibleLine.id = `${dungeon}ChestContentsLine_${y}`;
      visibleLine.setAttribute('x1', 0);
      visibleLine.setAttribute('y1', y);
      visibleLine.setAttribute('x2', viewboxWidth);
      visibleLine.setAttribute('y2', y);
      visibleLine.setAttribute('stroke', 'black'); // or your desired color
      visibleLine.setAttribute('stroke-width', 1); // or your desired width
      chart.appendChild(visibleLine);

      // Create the invisible line for hover workaround
      let hoverLine = document.createElementNS(SVG_NS, 'line');
      hoverLine.id = `${dungeon}ChestContentsLine_${y}_hover`;
      hoverLine.setAttribute('x1', 0);
      hoverLine.setAttribute('y1', y);
      hoverLine.setAttribute('x2', viewboxWidth);
      hoverLine.setAttribute('y2', y);
      hoverLine.setAttribute('stroke', 'transparent');
      hoverLine.setAttribute('stroke-width', hoverLineWidth);
      hoverLine.setAttribute('z-index', '2'); // below original line
      hoverLine.addEventListener('mouseover', () => visibleLine.setAttribute('stroke', 'white'), hoverLine.style.cursor = 'pointer', visibleLine.style.cursor = 'pointer');
      hoverLine.addEventListener('mouseout', () => visibleLine.setAttribute('stroke', 'black'));
      hoverLine.addEventListener('click', () => selectLine(y));
      chart.appendChild(hoverLine);
    }

    let target = document.getElementById(`${dungeon}ChestContentsChart`);
    target.appendChild(chart);

    let legendContainer = document.getElementById(`${dungeon}ChestContentsLegend`);
    let legend = document.createElement('div');
    legend.classList.add('clearfix');
    columns.forEach(column => {
      let entry = document.createElement('div');
      entry.classList.add('chartLegendEntry');
      let icon = document.createElement('span');
      icon.style.color = column.fillColour;
      icon.textContent = '■';
      entry.appendChild(icon);
      let label = document.createElement('span');
      label.textContent = column.name;
      entry.appendChild(label);
      entry.addEventListener('click', event => {
        selectColumn(column);
      });
      legend.appendChild(entry);
    });
    legendContainer.appendChild(legend);

    let floorSelect = document.createElement('select');
    floorSelect.id = floorSelectorId;
    floorSelect.style.marginTop = '8px';
    floorSelect.appendChild(makeOption(-1, 'Select floors'));
    data.forEach((floorset, index) => {
      floorSelect.appendChild(makeOption(index, `Floors ${floorset.startFloor}-${floorset.endFloor}`));
    });
    floorSelect.addEventListener('change', event => {
      if (event.target.value >= 0) {
        let lineY = event.target.value * lineSpacing;
        selectLine(lineY);
      }
    });
    legendContainer.appendChild(floorSelect);
  }

  function makeOption(value, label) {
    let option = document.createElement('option');
    option.value = value;
    option.textContent = label;
    return option;
  }

  function makePotdChestDistributionColumns() {
    return makeChestDistributionColumns([{
      name: 'Lust',
      key: 'lust',
      chestType: 'gold',
      fillColour: '#FED92D'
    }, {
      name: 'Rage',
      key: 'rage',
      chestType: 'gold',
      fillColour: '#F96C00'
    }, {
      name: 'Resolution',
      key: 'resolution',
      chestType: 'gold',
      fillColour: '#FFEB35'
    }], false)
  }

  function makeHohChestDistributionColumns() {
    return makeChestDistributionColumns([{
      name: 'Frailty',
      key: 'frailty',
      chestType: 'gold',
      fillColour: '#FED92D'
    }, {
      name: 'Concealment',
      key: 'concealment',
      chestType: 'gold',
      fillColour: '#F96C00'
    }, {
      name: 'Petrification',
      key: 'petrification',
      chestType: 'gold',
      fillColour: '#FFEB35'
    }], true)
  }

  function makeChestDistributionColumns(uniquePomanders, includeMagicite) {
    columns = [{
      name: 'Safety',
      key: 'safety',
      chestType: 'gold',
      fillColour: '#7A0000'
    }, {
      name: 'Sight',
      key: 'sight',
      chestType: 'gold',
      fillColour: '#F96C00'
    }, {
      name: 'Strength',
      key: 'strength',
      chestType: 'gold',
      fillColour: '#8C0F00'
    }, {
      name: 'Steel',
      key: 'steel',
      chestType: 'gold',
      fillColour: '#FA7E08'
    }, {
      name: 'Affluence',
      key: 'affluence',
      chestType: 'gold',
      fillColour: '#9E1F00'
    }, {
      name: 'Flight',
      key: 'flight',
      chestType: 'gold',
      fillColour: '#FB900F'
    }, {
      name: 'Alteration',
      key: 'alteration',
      chestType: 'gold',
      fillColour: '#B02E00'
    }, {
      name: 'Purity',
      key: 'purity',
      chestType: 'gold',
      fillColour: '#FCA217'
    }, {
      name: 'Fortune',
      key: 'fortune',
      chestType: 'gold',
      fillColour: '#C33E00'
    }, {
      name: 'Witching',
      key: 'witching',
      chestType: 'gold',
      fillColour: '#FCB51E'
    }, {
      name: 'Serenity',
      key: 'serenity',
      chestType: 'gold',
      fillColour: '#D54D00'
    }, {
      name: 'Intuition',
      key: 'intuition',
      chestType: 'gold',
      fillColour: '#FDC726'
    }, {
      name: 'Raising',
      key: 'raising',
      chestType: 'gold',
      fillColour: '#E75D00'
    }];

    columns.push.apply(columns, uniquePomanders);

    columns.push({
      name: 'Gold Mimic',
      key: 'gold_mimic',
      chestType: 'gold',
      fillColour: '#D2007F'
    }, {
      name: 'Aetherpool Upgrade',
      key: 'aetherpool',
      chestType: 'silver',
      fillColour: '#00579A'
    }, {
      name: 'Exploding Chest',
      key: 'trap',
      chestType: 'silver',
      fillColour: '#011176'
    });

    if (includeMagicite) {
      columns.push({
        name: 'Magicite',
        key: 'magicite',
        chestType: 'silver',
        fillColour: '#0191FF'
      })
    }

    columns.push({
      name: 'Silver Mimic',
      key: 'silver_mimic',
      chestType: 'silver',
      fillColour: '#D2007F'
    }, {
      name: 'Potion',
      key: 'potion',
      chestType: 'bronze',
      fillColour: '#7D1800'
    }, {
      name: 'Phoenix Down',
      key: 'phoenix_down',
      chestType: 'bronze',
      fillColour: '#AA4F39'
    }, {
      name: 'Potsherd',
      key: 'potsherd',
      chestType: 'bronze',
      fillColour: '#5E1200'
    }, {
      name: 'Bronze Mimic',
      key: 'bronze_mimic',
      chestType: 'bronze',
      fillColour: '#D2007F'
    });

    return columns.map(column => {
      column.points = [];
      return column;
    });
  }

  function coords(x, y) {
    return x + ',' + y;
  }

  function getViewboxPoint(svg, event) {
    let pt = svg.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;
    return pt.matrixTransform(svg.getScreenCTM().inverse());
  }

  function makeItemDropsByFloorTable(titleId, tableId, column, data) {
    let title = document.getElementById(titleId);
    title.textContent = `${column.name} Finds by Floor`;

    let table = document.getElementById(tableId);
    clearTable(table);

    const chestTypeLabel = capitalize(column.chestType);
    const contentsLabel = column.name.endsWith('Mimic') ? 'Mimic' : column.name;
    const headings = [
      'Floors',
      '% Chests ' + chestTypeLabel,
      `% Within ${chestTypeLabel}`,
      `% Within All`
    ];
    table.appendChild(makeThead(headings));

    rows = []
    for (let floorset of data) {
      const percentChestType = parseFloat(floorset['percent_' + column.chestType]);
      const percentInChestType = floorset['total_' + column.chestType] == 0 ? 0
        : floorset[column.key] / floorset['total_' + column.chestType] * 100;
      const percentInAll = percentInChestType * percentChestType / 100;
      rows.push([
        `${floorset.startFloor}-${floorset.endFloor}`,
        percentChestType.toFixed(2),
        percentInChestType.toFixed(2),
        percentInAll.toFixed(2)
      ]);
    }
    table.appendChild(makeTbody(rows));
    title.scrollIntoView({ block: 'center' });
  }

  function makeFloorsetDropsTable(titleId, tableId, columns, floorset) {
    let title = document.getElementById(titleId);
    title.textContent = `Floors ${floorset.startFloor}-${floorset.endFloor} Chest Contents`;

    let table = document.getElementById(tableId);
    clearTable(table);

    const headings = [
      'Contents',
      'Chest Type',
      '% Chests Chest Type',
      '% Within Chest Type',
      '% Within All'
    ];
    table.appendChild(makeThead(headings));

    let rows = [];
    for (let column of columns) {
      const percentChestType = parseFloat(floorset['percent_' + column.chestType]);
      const percentInChestType = floorset['total_' + column.chestType] == 0 ? 0
        : floorset[column.key] / floorset['total_' + column.chestType] * 100;
      const percentInAll = percentInChestType * percentChestType / 100;
      rows.push([
        column.name,
        capitalize(column.chestType),
        percentChestType.toFixed(2),
        percentInChestType.toFixed(2),
        percentInAll.toFixed(2)
      ]);
    }

    table.appendChild(makeTbody(rows));
    title.scrollIntoView({ block: 'center' });
  }

  function clearTable(table) {
    while (table.lastChild) {
      table.removeChild(table.lastChild);
    }
  }

  function makeThead(headings) {
    let thead = document.createElement('thead');
    let headRow = document.createElement('tr');
    for (let heading of headings) {
      let th = document.createElement('th');
      th.textContent = heading;
      headRow.appendChild(th);
    }
    thead.appendChild(headRow);
    return thead;
  }

  function makeTbody(rowData) {
    let tbody = document.createElement('tbody');
    for (let row of rowData) {
      let tr = document.createElement('tr');
      for (let value of row) {
        let td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    return tbody
  }

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function get_percent(numerator, denominator) {
    return (numerator / denominator * 100).toFixed(2);
  }

})();
