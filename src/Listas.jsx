import React, { useEffect, useState } from "react";

export default function Listas() {
  const [equipo1, setEquipo1] = useState("Madrid");
  const [equipo2, setEquipo2] = useState("Girona");
  const [equipo3, setEquipo3] = useState("Barcelona");
  const [equipo4, setEquipo4] = useState("Atletico");
  const [equipo5, setEquipo5] = useState("Bilbao");
  const [equipo6, setEquipo6] = useState("Betis");
  const [equipo7, setEquipo7] = useState("Real Sociedad");
  const [equipo8, setEquipo8] = useState("Las Palmas");
  const [equipo9, setEquipo9] = useState("Valencia");
  const [equipo10, setEquipo10] = useState("Getafe");
  const [ordenEquipos, setOrdenEquipos] = useState([]);

  console.log(ordenEquipos);

  function createClasif() {
    setOrdenEquipos([
      equipo1,
      equipo2,
      equipo3,
      equipo4,
      equipo5,
      equipo6,
      equipo7,
      equipo8,
      equipo9,
      equipo10,
    ]);
  }

  var equiposLiga = [
    "Almeria",
    "Atletico",
    "Cadiz",
    "Celta",
    "Alaves",
    "Barcelona",
    "Betis",
    "Bilbao",
    "Getafe",
    "Girona",
    "Granada",
    "Madrid",
    "Mallorca",
    "Las Palmas",
    "Osasuna",
    "Rayo",
    "Real Sociedad",
    "Sevilla",
    "Valencia",
    "Villarreal",
  ];

  const listaYeret = [
    "Barcelona",
    "Madrid",
    "Atletico",
    "Girona",
    "Bilbao",
    "Real Sociedad",
    "Betis",
    "Valencia",
    "Getafe",
    "Las Palmas",
  ];

  const listaOsian = [
    "Madrid",
    "Barcelona",
    "Atletico",
    "Girona",
    "Bilbao",
    "Real Sociedad",
    "Las Palmas",
    "Betis",
    "Getafe",
    "Valencia",
  ];
  const listaEche = [
    "Madrid",
    "Barcelona",
    "Girona",
    "Atletico",
    "Bilbao",
    "Real Sociedad",
    "Las Palmas",
    "Betis",
    "Getafe",
    "Valencia",
  ];
  const listaNau = [
    "Madrid",
    "Girona",
    "Barcelona",
    "Atletico",
    "Bilbao",
    "Real Sociedad",
    "Betis",
    "Las Palmas",
    "Valencia",
    "Osasuna",
  ];

  const listaRaul = [
    "Madrid",
    "Girona",
    "Bilbao",
    "Barcelona",
    "Atletico",
    "Real Sociedad",
    "Valencia",
    "Betis",
    "Getafe",
    "Las Palmas",
  ];
  const listaRuben = [
    "Madrid",
    "Atletico",
    "Girona",
    "Barcelona",
    "Bilbao",
    "Real Sociedad",
    "Betis",
    "Las Palmas",
    "Getafe",
    "Rayo",
  ];

  var ClasificaReal = ordenEquipos;

  function puntuacion(listas) {
    let sumaDePuntos = 0;
    for (let i = 0; i < ClasificaReal.length; i++)
      if (ClasificaReal[i] === listas[i]) {
        sumaDePuntos += 5;

        if (i === 0) {
          sumaDePuntos += 3;
        } else if (i < 4) {
          sumaDePuntos += 2;
        } else if (i < 6) {
          sumaDePuntos += 1;
        }
      } else if (
        ClasificaReal[i + 1] === listas[i] ||
        ClasificaReal[i - 1] === listas[i]
      ) {
        sumaDePuntos += 2;
      }

    return sumaDePuntos;
  }

  function puntuacionDeEquipos(listas) {
    let puntosPorEquipo = [];
    for (let i = 0; i < ClasificaReal.length; i++)
      if (ClasificaReal[i] === listas[i]) {
        if (i === 0) {
          puntosPorEquipo.push(8);
        } else if (i < 4) {
          puntosPorEquipo.push(7);
        } else if (i < 6) {
          puntosPorEquipo.push(6);
        } else {
          puntosPorEquipo.push(5);
        }
      } else if (
        ClasificaReal[i + 1] === listas[i] ||
        ClasificaReal[i - 1] === listas[i]
      ) {
        puntosPorEquipo.push(2);
      } else {
        puntosPorEquipo.push(0);
      }

    return puntosPorEquipo;
  }

  const arrayRaulPuntos = puntuacionDeEquipos(listaRaul);
  const arrayNauPuntos = puntuacionDeEquipos(listaNau);
  const arrayRubenPuntos = puntuacionDeEquipos(listaRuben);
  const arrayEchePuntos = puntuacionDeEquipos(listaEche);
  const arrayOsianPuntos = puntuacionDeEquipos(listaOsian);
  const arrayYeretPuntos = puntuacionDeEquipos(listaYeret);

  const raulPuntosTotal = puntuacion(listaRaul);
  const nauPuntosTotal = puntuacion(listaNau);
  const rubenPuntosTotal = puntuacion(listaRuben);
  const echePuntosTotal = puntuacion(listaEche);
  const osianPuntosTotal = puntuacion(listaOsian);
  const YeretPuntosTotal = puntuacion(listaYeret);

  return (
    <>
      <nav className="navbar">
        <div className="container-fluid d-flex justify-content-center">
          <form className="d-flex" role="search">
            <div className="teambutton-position">
              <span className="stand-span">1º posición</span>
              <select
                name="opciones"
                className="team-position"
                value={equipo1}
                onChange={(e) => setEquipo1(e.target.value)}
              >
                {equiposLiga.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="teambutton-position">
              <span className="stand-span">2º posición</span>
              <select
                name="opciones"
                className="team-position"
                value={equipo2}
                onChange={(e) => setEquipo2(e.target.value)}
              >
                {equiposLiga.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="teambutton-position">
              <span className="stand-span">3º posición</span>
              <select
                name="opciones"
                className="team-position"
                value={equipo3}
                onChange={(e) => setEquipo3(e.target.value)}
              >
                {equiposLiga.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="teambutton-position">
              <span className="stand-span">4º posición</span>
              <select
                name="opciones"
                className="team-position"
                value={equipo4}
                onChange={(e) => setEquipo4(e.target.value)}
              >
                {equiposLiga.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="teambutton-position">
              <span className="stand-span">5º posición</span>
              <select
                name="opciones"
                className="team-position"
                value={equipo5}
                onChange={(e) => setEquipo5(e.target.value)}
              >
                {equiposLiga.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="teambutton-position">
              <span className="stand-span">6º posición</span>
              <select
                name="opciones"
                className="team-position"
                value={equipo6}
                onChange={(e) => setEquipo6(e.target.value)}
              >
                {equiposLiga.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="teambutton-position">
              <span className="stand-span">7º posición</span>
              <select
                name="opciones"
                className="team-position"
                value={equipo7}
                onChange={(e) => setEquipo7(e.target.value)}
              >
                {equiposLiga.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="teambutton-position">
              <span className="stand-span">8º posición</span>
              <select
                name="opciones"
                className="team-position"
                value={equipo8}
                onChange={(e) => setEquipo8(e.target.value)}
              >
                {equiposLiga.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="teambutton-position">
              <span className="stand-span">9º posición</span>
              <select
                name="opciones"
                className="team-position"
                value={equipo9}
                onChange={(e) => setEquipo9(e.target.value)}
              >
                {equiposLiga.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="teambutton-position">
              <span className="stand-span">10º posición</span>
              <select
                name="opciones"
                className="team-position"
                value={equipo10}
                onChange={(e) => setEquipo10(e.target.value)}
              >
                {equiposLiga.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
      </nav>
      <div className="peniporra">Peni</div>
      <button id="boton-ejecutar" className="btn" onClick={createClasif}>
        Actualiza la clasificación aqui!
      </button>
      <div className="peniporra">Porra</div>
      <div className="row">
        <div className="divRaul tabla">
          <h3>Yeret</h3>
          <ul className="listaRaul">
            <li>
              <span className="clasif__real">Oficial</span>
              <span className="clasif__apuesta">Apuesta</span>
              <span className="clasif__puntos">Puntos</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[0]}</span>
              <span>{listaYeret[0]} </span>
              <span className="puntos">{arrayYeretPuntos[0]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[1]}</span>
              <span>{listaYeret[1]} </span>
              <span className="puntos">{arrayYeretPuntos[1]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[2]}</span>
              <span>{listaYeret[2]} </span>
              <span className="puntos">{arrayYeretPuntos[2]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[3]}</span>
              <span>{listaYeret[3]} </span>
              <span className="puntos">{arrayYeretPuntos[3]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[4]}</span>
              <span>{listaYeret[4]} </span>
              <span className="puntos">{arrayYeretPuntos[4]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[5]}</span>
              <span>{listaYeret[5]} </span>
              <span className="puntos">{arrayYeretPuntos[5]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[6]}</span>
              <span>{listaYeret[6]} </span>
              <span className="puntos">{arrayYeretPuntos[6]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[7]}</span>
              <span>{listaYeret[7]} </span>
              <span className="puntos">{arrayYeretPuntos[7]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[8]}</span>
              <span>{listaYeret[8]} </span>
              <span className="puntos">{arrayYeretPuntos[8]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[9]}</span>
              <span>{listaYeret[9]} </span>
              <span className="puntos">{arrayYeretPuntos[9]}</span>
            </li>
          </ul>
          <h2>{YeretPuntosTotal} puntos!</h2>
        </div>
        <div className="divRaul tabla">
          <h3>Nau</h3>
          <ul className="listaRaul">
            <li>
              <span className="clasif__real">Oficial</span>
              <span className="clasif__apuesta">Apuesta</span>
              <span className="clasif__puntos">Puntos</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[0]}</span>
              <span>{listaNau[0]} </span>
              <span className="puntos">{arrayNauPuntos[0]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[1]}</span>
              <span>{listaNau[1]} </span>
              <span className="puntos">{arrayNauPuntos[1]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[2]}</span>
              <span>{listaNau[2]} </span>
              <span className="puntos">{arrayNauPuntos[2]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[3]}</span>
              <span>{listaNau[3]} </span>
              <span className="puntos">{arrayNauPuntos[3]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[4]}</span>
              <span>{listaNau[4]} </span>
              <span className="puntos">{arrayNauPuntos[4]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[5]}</span>
              <span>{listaNau[5]} </span>
              <span className="puntos">{arrayNauPuntos[5]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[6]}</span>
              <span>{listaNau[6]} </span>
              <span className="puntos">{arrayNauPuntos[6]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[7]}</span>
              <span>{listaNau[7]} </span>
              <span className="puntos">{arrayNauPuntos[7]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[8]}</span>
              <span>{listaNau[8]} </span>
              <span className="puntos">{arrayNauPuntos[8]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[9]}</span>
              <span>{listaNau[9]} </span>
              <span className="puntos">{arrayNauPuntos[9]}</span>
            </li>
          </ul>
          <h2>{nauPuntosTotal} puntos!</h2>
        </div>
        <div className="divRaul tabla">
          <h3>Ruben</h3>
          <ul className="listaRaul">
            <li>
              <span className="clasif__real">Oficial</span>
              <span className="clasif__apuesta">Apuesta</span>
              <span className="clasif__puntos">Puntos</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[0]}</span>
              <span>{listaRuben[0]} </span>
              <span className="puntos">{arrayRubenPuntos[0]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[1]}</span>
              <span>{listaRuben[1]} </span>
              <span className="puntos">{arrayRubenPuntos[1]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[2]}</span>
              <span>{listaRuben[2]} </span>
              <span className="puntos">{arrayRubenPuntos[2]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[3]}</span>
              <span>{listaRuben[3]} </span>
              <span className="puntos">{arrayRubenPuntos[3]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[4]}</span>
              <span>{listaRuben[4]} </span>
              <span className="puntos">{arrayRubenPuntos[4]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[5]}</span>
              <span>{listaRuben[5]} </span>
              <span className="puntos">{arrayRubenPuntos[5]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[6]}</span>
              <span>{listaRuben[6]} </span>
              <span className="puntos">{arrayRubenPuntos[6]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[7]}</span>
              <span>{listaRuben[7]} </span>
              <span className="puntos">{arrayRubenPuntos[7]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[8]}</span>
              <span>{listaRuben[8]} </span>
              <span className="puntos">{arrayRubenPuntos[8]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[9]}</span>
              <span>{listaRuben[9]} </span>
              <span className="puntos">{arrayRubenPuntos[9]}</span>
            </li>
          </ul>
          <h2>{rubenPuntosTotal} puntos!</h2>
        </div>
        <div className="divRaul tabla">
          <h3>Eche</h3>
          <ul className="listaRaul">
            <li>
              <span className="clasif__real">Oficial</span>
              <span className="clasif__apuesta">Apuesta</span>
              <span className="clasif__puntos">Puntos</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[0]}</span>
              <span>{listaEche[0]} </span>
              <span className="puntos">{arrayEchePuntos[0]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[1]}</span>
              <span>{listaEche[1]} </span>
              <span className="puntos">{arrayEchePuntos[1]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[2]}</span>
              <span>{listaEche[2]} </span>
              <span className="puntos">{arrayEchePuntos[2]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[3]}</span>
              <span>{listaEche[3]} </span>
              <span className="puntos">{arrayEchePuntos[3]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[4]}</span>
              <span>{listaEche[4]} </span>
              <span className="puntos">{arrayEchePuntos[4]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[5]}</span>
              <span>{listaEche[5]} </span>
              <span className="puntos">{arrayEchePuntos[5]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[6]}</span>
              <span>{listaEche[6]} </span>
              <span className="puntos">{arrayEchePuntos[6]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[7]}</span>
              <span>{listaEche[7]} </span>
              <span className="puntos">{arrayEchePuntos[7]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[8]}</span>
              <span>{listaEche[8]} </span>
              <span className="puntos">{arrayEchePuntos[8]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[9]}</span>
              <span>{listaEche[9]} </span>
              <span className="puntos">{arrayEchePuntos[9]}</span>
            </li>
          </ul>
          <h2>{echePuntosTotal} puntos!</h2>
        </div>
        <div className="divRaul tabla">
          <h3>Osián</h3>
          <ul className="listaRaul">
            <li>
              <span className="clasif__real">Oficial</span>
              <span className="clasif__apuesta">Apuesta</span>
              <span className="clasif__puntos">Puntos</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[0]}</span>
              <span>{listaOsian[0]} </span>
              <span className="puntos">{arrayOsianPuntos[0]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[1]}</span>
              <span>{listaOsian[1]} </span>
              <span className="puntos">{arrayOsianPuntos[1]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[2]}</span>
              <span>{listaOsian[2]} </span>
              <span className="puntos">{arrayOsianPuntos[2]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[3]}</span>
              <span>{listaOsian[3]} </span>
              <span className="puntos">{arrayOsianPuntos[3]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[4]}</span>
              <span>{listaOsian[4]} </span>
              <span className="puntos">{arrayOsianPuntos[4]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[5]}</span>
              <span>{listaOsian[5]} </span>
              <span className="puntos">{arrayOsianPuntos[5]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[6]}</span>
              <span>{listaOsian[6]} </span>
              <span className="puntos">{arrayOsianPuntos[6]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[7]}</span>
              <span>{listaOsian[7]} </span>
              <span className="puntos">{arrayOsianPuntos[7]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[8]}</span>
              <span>{listaOsian[8]} </span>
              <span className="puntos">{arrayOsianPuntos[8]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[9]}</span>
              <span>{listaOsian[9]} </span>
              <span className="puntos">{arrayOsianPuntos[9]}</span>
            </li>
          </ul>
          <h2>{osianPuntosTotal} puntos!</h2>
        </div>
        <div className="divRaul tabla">
          <h3>Raul</h3>
          <ul className="listaRaul">
            <li>
              <span className="clasif__real">Oficial</span>
              <span className="clasif__apuesta">Apuesta</span>
              <span className="clasif__puntos">Puntos</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[0]}</span>
              <span>{listaRaul[0]} </span>
              <span className="puntos">{arrayRaulPuntos[0]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[1]}</span>
              <span>{listaRaul[1]} </span>
              <span className="puntos">{arrayRaulPuntos[1]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[2]}</span>
              <span>{listaRaul[2]} </span>
              <span className="puntos">{arrayRaulPuntos[2]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[3]}</span>
              <span>{listaRaul[3]} </span>
              <span className="puntos">{arrayRaulPuntos[3]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[4]}</span>
              <span>{listaRaul[4]} </span>
              <span className="puntos">{arrayRaulPuntos[4]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[5]}</span>
              <span>{listaRaul[5]} </span>
              <span className="puntos">{arrayRaulPuntos[5]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[6]}</span>
              <span>{listaRaul[6]} </span>
              <span className="puntos">{arrayRaulPuntos[6]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[7]}</span>
              <span>{listaRaul[7]} </span>
              <span className="puntos">{arrayRaulPuntos[7]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[8]}</span>
              <span>{listaRaul[8]} </span>
              <span className="puntos">{arrayRaulPuntos[8]}</span>
            </li>
            <li>
              <span className="clasif-real">{ClasificaReal[9]}</span>
              <span>{listaRaul[9]} </span>
              <span className="puntos">{arrayRaulPuntos[9]}</span>
            </li>
          </ul>
          <h2>{raulPuntosTotal} puntos!</h2>
        </div>
      </div>
    </>
  );
}
