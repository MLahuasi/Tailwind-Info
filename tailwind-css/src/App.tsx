import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { SideBar, TabBar } from "./layout";
import { Home, Post } from "./pages";
import { tabBarItems, postContent, sideBarItems } from "./data";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        {/* TabBar en la parte superior */}
        <TabBar items={tabBarItems} />
        <div className="flex flex-1 overflow-hidden">
          {/* SideBar a la izquierda (ancho fijo, altura completa) */}
          <SideBar items={sideBarItems} />

          {/* Contenido principal: ocupa el resto de ancho, con scroll si hace falta */}
          <main className="flex-1 overflow-auto bg-white">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/about" element={<About />} />*/}
              <Route
                path="/post/:id"
                element={<Post postContent={postContent} />}
              />
              <Route
                path="*"
                element={
                  <div className="p-6">
                    <h2 className="text-2xl font-bold">
                      404 - Página no encontrada
                    </h2>
                    <p className="text-gray-600">
                      Lo sentimos, la ruta especificada no existe.
                    </p>
                  </div>
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
