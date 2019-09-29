import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
const Models = lazy(() => import("./views/Models"));
const Versions = lazy(() => import("./views/Versions"));
const Colors = lazy(() => import("./views/Colors"));
const Optionals = lazy(() => import("./views/Optionals"));
const Resume = lazy(() => import("./views/Resume"));

export const ApplicationRoutes = () => (
  <>
    <Suspense fallback={<h1>Carregando modelos de carro...</h1>}>
        <Route path="/" exact component={Models} />
    </Suspense>
    <Suspense fallback={<h1>Carregando versões do modelo de carro selecionado...</h1>}>
        <Route path="/versions" exact component={Versions} />
    </Suspense>
    <Suspense fallback={<h1>Carregando cores disponíveis para a versão de carro selecionado...</h1>}>
        <Route path="/colors" exact component={Colors} />
    </Suspense>
    <Suspense fallback={<h1>Carregando opcionais disponíveis para a versão de carro selecionado...</h1>}>
        <Route path="/optionals" exact component={Optionals} />
    </Suspense>
    <Suspense fallback={<h1>Carregando o resumo final da seleção...</h1>}>
        <Route path="/resume" exact component={Resume} />
    </Suspense>
  </>
);
