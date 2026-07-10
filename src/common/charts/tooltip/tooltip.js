/* eslint-disable no-underscore-dangle */
import './tooltip.scss';

export function customTooltip(tooltipModel) {
  // Tooltip Element
  let tooltipEl = document.getElementById('chartjs-tooltip');

  // Create element on first render
  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.id = 'chartjs-tooltip';
    const tableElement = document.createElement('table');
    tooltipEl.appendChild(tableElement);
    document.body.appendChild(tooltipEl);
  }

  // Hide if no tooltip
  if (tooltipModel.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  // Set caret Position
  tooltipEl.classList.remove('above', 'below', 'no-transform');
  if (tooltipModel.yAlign) {
    tooltipEl.classList.add(tooltipModel.yAlign);
  } else {
    tooltipEl.classList.add('no-transform');
  }

  function getBody(bodyItem) {
    return bodyItem.lines;
  }

  // Set Text
  if (tooltipModel.body) {
    const titleLines = tooltipModel.title || [];
    const bodyLines = tooltipModel.body.map(getBody);

    const thead = document.createElement('thead');
    titleLines.forEach((title) => {
      const tr = document.createElement('tr');
      const th = document.createElement('th');
      th.textContent = title;
      tr.appendChild(th);
      thead.appendChild(tr);
    });

    const tbody = document.createElement('tbody');
    let suffix = '';
    if (this._chart.config.type === 'doughnut') suffix = '%';

    bodyLines.forEach((body, i) => {
      const colors = tooltipModel.labelColors[i];
      const style = `background:${colors.backgroundColor}; border-color:${colors.borderColor}; border-width: 2px`;
      const span = document.createElement('span');
      span.className = 'chartjs-tooltip-icon';
      span.style = style;

      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.appendChild(span);
      td.appendChild(document.createTextNode(`${body}${suffix}`));
      tr.appendChild(td);
      tbody.appendChild(tr);
    });

    const tableRoot = tooltipEl.querySelector('table');
    tableRoot.innerHTML = '';
    tableRoot.appendChild(thead);
    tableRoot.appendChild(tbody);
  }

  // `this` will be the overall tooltip
  const position = this._chart.canvas.getBoundingClientRect();

  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;
  tooltipEl.style.position = 'absolute';
  tooltipEl.style.left = `${position.left + tooltipModel.caretX}px`;
  tooltipEl.style.top = `${position.top + tooltipModel.caretY + 15}px`;
  tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
  tooltipEl.style.fontSize = `${tooltipModel.bodyFontSize}px`;
  tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
  tooltipEl.style.padding = `${tooltipModel.yPadding}px ${tooltipModel.xPadding}px`;
}