import React from "react";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./trans.css"; // Importa tu archivo de estilos CSS

const App = () => {
  return (
    <div className="app">
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames="page">
              <Switch location={location}>
                {/* Define tus rutas y componentes aquí */}
                <div style={{ display: "flex" }}>
                  <Link to="/Form1">
                    <Button>
                      Volver<span style={{ marginLeft: 5 }}></span>
                    </Button>
                  </Link>
                  <Button>
                    Siguiente<span style={{ marginLeft: 5 }}></span>
                  </Button>
                </div>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
};

export default App;
