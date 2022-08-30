import React from "react";
import "../estilos/GraficoHome.css";

export default function GraficoHome() {
  return (
    <div className="grafico-container">
      <div className="donut-chart-block block">
        <h2 className="titular">Actividades Mas solicitadas</h2>
        <div className="donut-chart">
          <div id="porcion1" className="recorte">
            <div className="quesito ios" data-rel="21"></div>
          </div>
          <div id="porcion2" className="recorte">
            <div className="quesito mac" data-rel="39"></div>
          </div>
          <div id="porcion3" className="recorte">
            <div className="quesito win" data-rel="31"></div>
          </div>
          <div id="porcionFin" className="recorte">
            <div className="quesito linux" data-rel="9"></div>
          </div>

          <p className="center-date">
            Agosto
            <br />
            <span className="scnd-font-color">2022</span>
          </p>
        </div>
        <ul className="os-percentages horizontal-list">
          <li>
            <p className="ios os scnd-font-color">YOGA</p>
            <p className="os-percentage">
              21<sup>%</sup>
            </p>
          </li>
          <li>
            <p className="mac os scnd-font-color">GAP</p>
            <p className="os-percentage">
              39<sup>%</sup>
            </p>
          </li>
          <li>
            <p className="linux os scnd-font-color">BOXEO</p>
            <p className="os-percentage">
              9<sup>%</sup>
            </p>
          </li>
          <li>
            <p className="win os scnd-font-color">HIIT</p>
            <p className="os-percentage">
              31<sup>%</sup>
            </p>
          </li>
        </ul>
      </div>
      <div className="donut-chart-block block">
        <h2 className="titular">Profesores Mas solicitados</h2>
        <div className="donut-chart">
          <div id="porcion1" className="recorte">
            <div className="quesito ios" data-rel="21"></div>
          </div>
          <div id="porcion2" className="recorte">
            <div className="quesito mac" data-rel="39"></div>
          </div>
          <div id="porcion3" className="recorte">
            <div className="quesito win" data-rel="31"></div>
          </div>
          <div id="porcionFin" className="recorte">
            <div className="quesito linux" data-rel="9"></div>
          </div>

          <p className="center-date">
            Agosto
            <br />
            <span className="scnd-font-color">2022</span>
          </p>
        </div>
        <ul className="os-percentages horizontal-list">
          <li>
            <p className="ios os scnd-font-color">JUAN</p>
            <p className="os-percentage">
              20<sup>%</sup>
            </p>
          </li>
          <li>
            <p className="mac os scnd-font-color">PAO</p>
            <p className="os-percentage">
              40<sup>%</sup>
            </p>
          </li>
          <li>
            <p className="linux os scnd-font-color">MARCOS</p>
            <p className="os-percentage">
              10<sup>%</sup>
            </p>
          </li>
          <li>
            <p className="win os scnd-font-color">LUCIA</p>
            <p className="os-percentage">
              30<sup>%</sup>
            </p>
          </li>
        </ul>
      </div>
      <div className="donut-chart-block block">
        <h2 className="titular">Horarios Mas solicitados</h2>
        <div className="donut-chart">
          <div id="porcion1" className="recorte">
            <div className="quesito ios" data-rel="21"></div>
          </div>
          <div id="porcion2" className="recorte">
            <div className="quesito mac" data-rel="39"></div>
          </div>
          <div id="porcion3" className="recorte">
            <div className="quesito win" data-rel="31"></div>
          </div>
          <div id="porcionFin" className="recorte">
            <div className="quesito linux" data-rel="9"></div>
          </div>

          <p className="center-date">
            Agosto
            <br />
            <span className="scnd-font-color">2022</span>
          </p>
        </div>
        <ul className="os-percentages horizontal-list">
          <li>
            <p className="ios os scnd-font-color">19hs</p>
            <p className="os-percentage">
              20<sup>%</sup>
            </p>
          </li>
          <li>
            <p className="mac os scnd-font-color">10hs</p>
            <p className="os-percentage">
              38<sup>%</sup>
            </p>
          </li>
          <li>
            <p className="linux os scnd-font-color">8hs</p>
            <p className="os-percentage">
              12<sup>%</sup>
            </p>
          </li>
          <li>
            <p className="win os scnd-font-color">17hs</p>
            <p className="os-percentage">
              30<sup>%</sup>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
