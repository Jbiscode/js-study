import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSidebar from "./components/ProjectSidebar.jsx";

function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar />
        <NoProjectSelected />
      </main>
    </>
  );
}

export default App;
