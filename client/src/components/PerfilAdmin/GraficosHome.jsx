import React from "react";
import "../estilos/GraficoHome.css";

export default function GraficoHome() {
  return (
    <div className="grafico-container">
      <div class="donut-chart-block block">
        <h2 class="titular">Actividades Mas solicitadas</h2>
        <div class="donut-chart">
          <div id="porcion1" class="recorte">
            <div class="quesito ios" data-rel="21"></div>
          </div>
          <div id="porcion2" class="recorte">
            <div class="quesito mac" data-rel="39"></div>
          </div>
          <div id="porcion3" class="recorte">
            <div class="quesito win" data-rel="31"></div>
          </div>
          <div id="porcionFin" class="recorte">
            <div class="quesito linux" data-rel="9"></div>
          </div>

          <p className="center-date">
            Agosto
            <br />
            <span class="scnd-font-color">2022</span>
          </p>
        </div>
        <ul class="os-percentages horizontal-list">
          <li>
            <p class="ios os scnd-font-color">YOGA</p>
            <p class="os-percentage">
              21<sup>%</sup>
            </p>
          </li>
          <li>
            <p class="mac os scnd-font-color">GAP</p>
            <p class="os-percentage">
              39<sup>%</sup>
            </p>
          </li>
          <li>
            <p class="linux os scnd-font-color">BOXEO</p>
            <p class="os-percentage">
              9<sup>%</sup>
            </p>
          </li>
          <li>
            <p class="win os scnd-font-color">HIIT</p>
            <p class="os-percentage">
              31<sup>%</sup>
            </p>
          </li>
        </ul>
      </div>
      <div class="donut-chart-block block">
        <h2 class="titular">Profesores Mas solicitados</h2>
        <div class="donut-chart">
          <div id="porcion1" class="recorte">
            <div class="quesito ios" data-rel="21"></div>
          </div>
          <div id="porcion2" class="recorte">
            <div class="quesito mac" data-rel="39"></div>
          </div>
          <div id="porcion3" class="recorte">
            <div class="quesito win" data-rel="31"></div>
          </div>
          <div id="porcionFin" class="recorte">
            <div class="quesito linux" data-rel="9"></div>
          </div>

          <p className="center-date">
            Agosto
            <br />
            <span class="scnd-font-color">2022</span>
          </p>
        </div>
        <ul class="os-percentages horizontal-list">
          <li>
            <p class="ios os scnd-font-color">JUAN</p>
            <p class="os-percentage">
              20<sup>%</sup>
            </p>
          </li>
          <li>
            <p class="mac os scnd-font-color">PAO</p>
            <p class="os-percentage">
              40<sup>%</sup>
            </p>
          </li>
          <li>
            <p class="linux os scnd-font-color">MARCOS</p>
            <p class="os-percentage">
              10<sup>%</sup>
            </p>
          </li>
          <li>
            <p class="win os scnd-font-color">LUCIA</p>
            <p class="os-percentage">
              30<sup>%</sup>
            </p>
          </li>
        </ul>
      </div>
      <div class="donut-chart-block block">
        <h2 class="titular">Horarios Mas solicitados</h2>
        <div class="donut-chart">
          <div id="porcion1" class="recorte">
            <div class="quesito ios" data-rel="21"></div>
          </div>
          <div id="porcion2" class="recorte">
            <div class="quesito mac" data-rel="39"></div>
          </div>
          <div id="porcion3" class="recorte">
            <div class="quesito win" data-rel="31"></div>
          </div>
          <div id="porcionFin" class="recorte">
            <div class="quesito linux" data-rel="9"></div>
          </div>

          <p className="center-date">
            Agosto
            <br />
            <span class="scnd-font-color">2022</span>
          </p>
        </div>
        <ul class="os-percentages horizontal-list">
          <li>
            <p class="ios os scnd-font-color">19hs</p>
            <p class="os-percentage">
              20<sup>%</sup>
            </p>
          </li>
          <li>
            <p class="mac os scnd-font-color">10hs</p>
            <p class="os-percentage">
              38<sup>%</sup>
            </p>
          </li>
          <li>
            <p class="linux os scnd-font-color">8hs</p>
            <p class="os-percentage">
              12<sup>%</sup>
            </p>
          </li>
          <li>
            <p class="win os scnd-font-color">17hs</p>
            <p class="os-percentage">
              30<sup>%</sup>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
