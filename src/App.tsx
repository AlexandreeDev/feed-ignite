import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

const posts: PostType[] = [
  {
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40",
      name: "Alexandre Jorge",
      role: "Web Dev",
    },
    content: [
      { content: "Fala galeraa 👋", type: "paragraph" },
      {
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        type: "paragraph",
      },
      { content: "jane.design/doctorcare", type: "link" },
    ],
    id: 1,
    publishedAt: new Date("2023-09-19 15:00:00"),
  },
  {
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50",
      name: "Osvaldo Ferreira",
      role: "Mecanico",
    },
    content: [
      { content: "Fala galeraa 👋", type: "paragraph" },
      {
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        type: "paragraph",
      },
      { content: "jane.design/doctorcare", type: "link" },
    ],
    id: 2,
    publishedAt: new Date("2023-09-15 15:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
