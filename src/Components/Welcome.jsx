import { useEffect, useRef } from "react";

import coppelBanner from "../imgs/coppel-banner.jpeg";
import welcomeImage from "../imgs/001-welcome.png";

export default function Welcome({ session, onSuccess, onError, params }) {
  const containerRef = useRef();

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  };

  let flow = "Producto N";

  const getFlow = () => {
    const flowType = params.get("flow");
    switch (flowType) {
      case '1':
        flow = "Préstamo personal"
        break;
      case '2':
        flow = "Crédito moto"
        break;
      case '3':
        flow = "BNPL"
        break;
      case '4':
        flow = "Producto N"
        break;
    }
    return <span>{flow}</span>;
  };

  return <div ref={containerRef}>
    <img src={coppelBanner} style={imgStyle} />
    <h4 style={{
      textAlign: "center",
    }}>Solicitar tu crédito Coppel es rápido y sencillo.</h4>
    <p>No olvides tener a la mano tu identificación oficial y un comprobante de domicilio</p>
    <img src={welcomeImage} style={imgStyle} />
    <p>Si cuentas con 5 minutos dale clic al boton de abajo.</p>
    <div className="button-container">
      <button onClick={onSuccess}>Continuar</button>
    </div>
  </div>;
}
